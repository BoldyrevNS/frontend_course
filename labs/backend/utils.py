import logging
import pandas as pd
import numpy as np
from datetime import datetime
from chardet.universaldetector import UniversalDetector
import os
import csv

csv_base_path = './csv/'


async def find_delimiter(path) -> str:
    sniffer = csv.Sniffer()
    with open(path) as fp:
        delimiter = sniffer.sniff(fp.read(5000)).delimiter
    return delimiter


async def get_df_from_io(input_data: bytearray, filename: str) -> pd.DataFrame:
    logging.getLogger('aiohttp.server').info(f'Analyze {filename} encoding')
    temp_filename = datetime.now().strftime("%Y%m%d%H%M%S") + filename
    file = open(csv_base_path + temp_filename, 'wb')
    file.write(input_data)
    file.close()
    detector = UniversalDetector()
    for line in open(csv_base_path + temp_filename, 'rb'):
        detector.feed(line)
        if detector.done:
            break
    detector.close()
    logging.getLogger('aiohttp.server').info(f'Info about {filename} encoding - {detector.result}')
    if detector.result.get('encoding') is None:
        raise Exception('Unknown encoding')
    logging.getLogger('aiohttp.server').info(f'Start save {filename}')
    output_file = open(csv_base_path + filename, 'wb')
    for line in open(csv_base_path + temp_filename, 'rb'):
        text = line.decode(detector.result['encoding'])
        text = text.encode("utf-8")
        output_file.write(text)
    output_file.close()
    logging.getLogger('aiohttp.server').info(f'Saved {filename}')
    os.remove(csv_base_path + temp_filename)
    delimiter: str = await find_delimiter(csv_base_path + filename)
    logging.getLogger('aiohttp.server').info(f'Info about {filename} delimiter = "{delimiter}"')
    df: pd.DataFrame = pd.read_csv(csv_base_path + filename, sep=delimiter)
    logging.getLogger('aiohttp.server').info(f'Loaded {filename} to DataFrame')
    return df


async def get_corr_matrix(df: pd.DataFrame) -> pd.DataFrame:
    corr_matrix = df.corr(numeric_only=True)
    return corr_matrix

def get_only_numeric_columns(df: pd.DataFrame) -> pd.DataFrame:
    only_numeric = df.select_dtypes(include=np.number)
    return only_numeric

def get_the_most_corr_columns(corr_matrix: pd.DataFrame) -> list:
    headers: list = corr_matrix.columns
    i_max: int = 0
    header_max: int = 1
    for header in range(len(headers)):
        i = header + 1
        while i < len(corr_matrix):
            if corr_matrix[headers[header]][i] > corr_matrix[headers[header_max]][i_max]:
                header_max = header
                i_max = i
            i += 1
    return [header_max, i_max]
