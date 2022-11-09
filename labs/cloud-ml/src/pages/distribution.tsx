import React from 'react';
import '../css/operationTemplateComponent.css';
import '../css/distribution.css';
import MethodPanel from '../components/methodPanel';
import Header from "../components/header";
import { getImage } from '../apis/imageApi';
import ImagePlace from '../components/imagePlace';
import { postDistribution } from '../apis/taskApi';
import InputData from '../inputData';
import StringInput from '../components/stringInput';
import OutputData from '../outputData';
import StringOutput from '../components/stringOutput';

interface DistributionData {
    image_name: string,
    name: string | null,
    distribution_type: string | null
}

function Distribution() {
    // eslint-disable-next-line
    const [distributionData, setDistributionData] = React.useState<DistributionData>({ image_name: "", name: null , distribution_type: null});
    const [selectedFile, setSelectedFile] = React.useState<null | any>(null);
    const [image, setImage] = React.useState<null | any>(null);
    const [columnName, setColumnName] = React.useState<string | null>(null);
    React.useEffect(() => {
        if (distributionData!.image_name === "") {
                return;
        }
        console.log(distributionData)
        getImage( setImage, distributionData!.image_name);
    },
        [distributionData]
    );
    const handleSubmit=(event: any) =>{
        event.preventDefault()
        if (selectedFile == null) {
            alert('Загрузите файл формата *.csv');
            return;
        }

        const formData = new FormData();
        formData.append(`${selectedFile.name}`, selectedFile);

        postDistribution(setDistributionData, formData, columnName);
    }

    const handleFileSelect = (event: any) => {
        if (event.target.files[0] !== undefined) {
            setSelectedFile(event.target.files[0]);
            console.log(event.target.files[0], event.target.files[0].name);
        } else {
            setSelectedFile(null);
        }
    }

    const handleColumnName = (event: any) => {
        setColumnName(event.target.value)
    }

    const inputColumnName: InputData = {
        mainLabel: 'Введите имя столбца',
        fieldName: 'column_name',
        defaultValue: '',
        tipLabel: 'Если данные содержат больше одного числового столбца будет распределение будет составляться по введённому столбцу',
        onChangeHandle: handleColumnName
    };

    let outputColumnName: OutputData ={
        mainLabel: 'Имя столбца',
        defaultValue: 'Здесь будет имя столбца, по которому было распределение',
        tipLabel: 'Без заданного имени столбца берётся первый числовой столбец',
        value: null
    }

    let outputDistributionType: OutputData ={
        mainLabel: 'Тип распределения',
        defaultValue: 'Здесь будет тип самого подходящего распределения',
        value: null
    }

    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <div className="template-section">
                    <div>
                        <h2>Распределение</h2>
                    </div>
                </div>
                <section className="functions-list row mt-2 mb-3">
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Параметры
                            </div>
                            <MethodPanel onChange={handleFileSelect} onSend={handleSubmit} />
                            <StringInput {...inputColumnName} />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Результат
                            </div>
                            <ImagePlace image={image} />
                            <StringOutput {...outputColumnName} {...{value: distributionData.name}} />
                            <StringOutput {...outputDistributionType} {...{value: distributionData.distribution_type}} />
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Distribution;