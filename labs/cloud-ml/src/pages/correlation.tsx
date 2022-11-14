import React from 'react';
import '../css/operationTemplateComponent.css';
import '../css/correlation.css';
import MethodPanel from '../components/methodPanel';
import Header from "../components/header";
import ImagePlace from '../components/imagePlace';
import Matrix from '../components/matrix';
import StringInput from '../components/stringInput';
import InputData from '../models/inputData';
import { getImage } from '../apis/fileApi';
import { postCorrelation } from '../apis/taskApi';

interface CorrelationData {
    image_name: string,
    names: string[],
    values: number[]
}

function Correlation() {
    const [correlationData, setCorrelationData] = React.useState<CorrelationData>({ image_name: "", names: [], values: [] });
    const [selectedFile, setSelectedFile] = React.useState<null | any>(null);
    const [image, setImage] = React.useState<null | any>(null);
    const [colorMap, setColorMap] = React.useState<string | null>(null);
    React.useEffect(() => {
        if (correlationData!.image_name === "") {
                return;
        }
        const get_image = async () => {
            const image = await getImage(correlationData!.image_name, sessionStorage.getItem('user'));
            setImage(image)
        }
        get_image()
    },
        [correlationData]
    );

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        if (selectedFile == null) {
            alert('Загрузите файл формата *.csv');
            return;
        }

        const formData = new FormData();
        formData.append(`${selectedFile.name}`, selectedFile);

        const result: CorrelationData | null = await postCorrelation(formData, sessionStorage.getItem('user'), colorMap);
        
        if(result !== null){
            setCorrelationData((oldData: Object) => ({ ...oldData, ...result }))
        }

    }

    const handleFileSelect = (event: any) => {
        if (event.target.files[0] !== undefined) {
            setSelectedFile(event.target.files[0]);
            console.log(event.target.files[0], event.target.files[0].name);
        } else {
            setSelectedFile(null);
        }
    }

    const handleColorMap = (event: any) => {
        setColorMap(event.target.value.trim())
    }

    const inputColormap: InputData = {
        mainLabel: 'Введите название colormap',
        fieldName: 'color_map',
        defaultValue: '',
        tipLabel: 'Допустимые colormap',
        tipLabelLink: 'https://matplotlib.org/stable/tutorials/colors/colormaps.html',
        onChangeHandle: handleColorMap
    };

    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <div className="template-section">
                    <div>
                        <h2>Корреляция</h2>
                    </div>
                </div>
                <section className="functions-list row mt-2 mb-3">
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Параметры
                            </div>
                            <MethodPanel onChange={handleFileSelect} onSend={handleSubmit} />
                            <StringInput {...inputColormap} />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Результат
                            </div>
                            <ImagePlace image={image} />
                            <Matrix names={correlationData.names} values={correlationData.values} />
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Correlation;