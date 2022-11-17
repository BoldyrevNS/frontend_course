import React from 'react';
import '../css/operationTemplateComponent.css';
import '../css/regression.css';
import MethodPanel from '../components/methodPanel';
import Header from "../components/header";
import { getImage } from '../apis/fileApi';
import ImagePlace from '../components/imagePlace';
import InputData from '../models/inputData';
import OutputData from '../models/outputData';
import StringOutput from '../components/stringOutput';
import StringInput from '../components/stringInput';
import { postRegression } from '../apis/taskApi';
import NumberInput from '../components/numberInput';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface RegressionData {
    image_name: string,
    name_x: string | null,
    name_y: string | null
}

function Regression() {
    const navigate: NavigateFunction = useNavigate();
    const [regerssionData, setRegressionData] = React.useState<RegressionData>({ image_name: "", name_x: null, name_y: null });
    const [selectedFile, setSelectedFile] = React.useState<null | any>(null);
    const [image, setImage] = React.useState<null | any>(null);
    const [columnNameX, setColumnNameX] = React.useState<string | null>(null);
    const [columnNameY, setColumnNameY] = React.useState<string | null>(null);
    const [polynomialOrder, setPolynomialOrder] = React.useState<number>(1);
    React.useEffect(() => {
        if (regerssionData!.image_name === "") {
            return;
        }
        const get_image = async () => {
            const image = await getImage(regerssionData!.image_name);
            if(image === null){
                navigate('/login');
            }
            setImage(image)
        }
        get_image()
    },
    // eslint-disable-next-line
        [regerssionData]
    );
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        if (selectedFile == null) {
            alert('Загрузите файл формата *.csv');
            return;
        }

        if(polynomialOrder <= 0){
            alert('Степень полинома должна быть >=1');
            return;
        }

        const formData = new FormData();
        formData.append(`${selectedFile.name}`, selectedFile);
        const result: RegressionData | null | true = await postRegression(formData, polynomialOrder, columnNameX, columnNameY);
        if(result === true){

            handleSubmit(event);

        }else if(result === null){

            navigate('/login');

        }else if(result !== undefined){
            setRegressionData((oldData: Object) => ({ ...oldData, ...result }))
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


    const handleColumnName = (event: any) => {
        event.preventDefault()
        if (event.target.name === 'column_name_x') {
            setColumnNameX(event.target.value.trim())
        } else {
            setColumnNameY(event.target.value.trim())
        }

    }

    const handlePolynomialOrder = (event: any) => {
        event.preventDefault()
        setPolynomialOrder(event.target.value);
    }

    const inputPolynomialOrder: InputData = {
        mainLabel: 'Введите степень полинома',
        fieldName: 'poly_order',
        defaultValue: '1',
        min: "1",
        tipLabel: 'Степень полинома влияет на характер регрессии',
        tipLabelLink: 'https://machinelearningmastery.ru/polynomial-regression-bbe8b9d97491/',
        onChangeHandle: handlePolynomialOrder
    };

    const inputColumnNameX: InputData = {
        mainLabel: 'Введите имя для столбца по оси X',
        fieldName: 'column_name_x',
        defaultValue: '',
        tipLabel: 'Для недостающего столбца будет другой взят другой числовой столбец',
        onChangeHandle: handleColumnName
    };

    const inputColumnNameY: InputData = {
        mainLabel: 'Введите имя для столбца по оси Y',
        fieldName: 'column_name_y',
        defaultValue: '',
        tipLabel: 'Для недостающего столбца будет другой взят другой числовой столбец',
        onChangeHandle: handleColumnName
    };

    let outputColumnNameX: OutputData = {
        mainLabel: 'Имя столбца по оси X',
        defaultValue: 'Здесь будет имя столбца по оси X',
        tipLabel: 'Если имя не было указано, то был выбран самый коррелирующий столбец',
        value: null
    }

    let outputColumnNameY: OutputData = {
        mainLabel: 'Имя столбца по оси Y',
        defaultValue: 'Здесь будет имя столбца по оси Y',
        tipLabel: 'Если имя не было указано, то был выбран самый коррелирующий столбец',
        value: null
    }

    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <div className="template-section">
                    <div>
                        <h2>Регрессия</h2>
                    </div>
                </div>
                <section className="functions-list row mt-2 mb-3">
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Параметры
                            </div>
                            <MethodPanel onChange={handleFileSelect} onSend={handleSubmit} />
                            <NumberInput {...inputPolynomialOrder} />
                            <StringInput {...inputColumnNameX} />
                            <StringInput {...inputColumnNameY} />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Результат
                            </div>
                            <ImagePlace image={image} />
                            <StringOutput {...outputColumnNameX} {...{ value: regerssionData.name_x }} />
                            <StringOutput {...outputColumnNameY} {...{ value: regerssionData.name_y }} />
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Regression;