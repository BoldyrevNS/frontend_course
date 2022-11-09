import React from 'react';
import '../css/operationTemplateComponent.css';
import '../css/dataPreprocessing.css';
import '../css/button_default.css';
import MethodPanel from '../components/methodPanel';
import Header from "../components/header";
import { postPreprocessing } from '../apis/taskApi';


function DataPreprocessing() {
    const [selectedFile, setSelectedFile] = React.useState<null | any>(null);
    const [filename, setFilename] = React.useState<string>('');
    const [csvUrl, setCsvUrl] = React.useState<string>('');
    const handleSubmit = (event: any) => {
        event.preventDefault()
        if (selectedFile == null) {
            alert('Загрузите файл формата *.csv');
            return;
        }

        const formData = new FormData();
        formData.append(`${selectedFile.name}`, selectedFile);

        postPreprocessing(setCsvUrl, formData);
    }

    const handleFileSelect = (event: any) => {
        if (event.target.files[0] !== undefined) {
            setSelectedFile(event.target.files[0]);
            setFilename(event.target.files[0].name)
            console.log(event.target.files[0], event.target.files[0].name);
        } else {
            setSelectedFile(null);
        }
    }

    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <div className="template-section">
                    <div>
                        <h2>Предварительная обработка данных</h2>
                    </div>
                </div>
                <section className="functions-list row mt-2 mb-3">
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Параметры
                            </div>
                            <MethodPanel onChange={handleFileSelect} onSend={handleSubmit} />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Результат
                            </div>
                            <div className='mb-auto mt-auto'>
                                {csvUrl === '' && <button type="submit" className="btn button-default btn-download" disabled>Кнопка для скачивания</button>}
                                {csvUrl !== '' &&
                                    <a href={csvUrl} download={'result_'+filename} className='download-link'>
                                        <button type="submit" className="btn button-default btn-download">Скачать результат</button>
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default DataPreprocessing;