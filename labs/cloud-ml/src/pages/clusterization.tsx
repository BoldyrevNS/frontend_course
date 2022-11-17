import React from 'react';
import '../css/operationTemplateComponent.css';
import '../css/clusterization.css';
import MethodPanel from '../components/methodPanel';
import Header from "../components/header";
import CheckBox, {CheckBoxData} from '../components/checkBox';
import ImagePlace from '../components/imagePlace';
import NumberInput from '../components/numberInput';
import InputData from '../models/inputData';
import StringOutput from '../components/stringOutput';
import OutputData from '../models/outputData';
import { getImage } from '../apis/fileApi';
import { postClusterization } from '../apis/taskApi';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface ClusterizationData{
    image_name: string,
    clusters_centers: any | null,
    clusters_labels: number[] | null,
    columns_names: string[] | null
}

function Clusterization() {
    const navigate: NavigateFunction = useNavigate();
    const [selectedFile, setSelectedFile] = React.useState<null | any>(null);
    const [withCenters, setWithCenters] = React.useState<boolean>(false);
    const [image, setImage] = React.useState<null | any>(null);
    const [clustersNumber, setClustersNumber] = React.useState<number>(1);
    const [clusterizationData, setClusterizationData] = React.useState<ClusterizationData>({
        image_name: "", 
        clusters_centers: null, 
        clusters_labels:null, 
        columns_names:null
    });

    React.useEffect(() => {
        if (clusterizationData!.image_name === "") {
            return;
        }

        const get_image = async () => {
            const image = await getImage(clusterizationData!.image_name);
            if(image === null){
                navigate('/login');
            }
            setImage(image)
        }
        get_image()
    },
    // eslint-disable-next-line
        [clusterizationData]
    );

    const handleSubmit = async (event: any) =>{
        event.preventDefault()
        if (selectedFile == null) {
            alert('Загрузите файл формата *.csv');
            return;
        }
        if(clustersNumber <= 0){
            alert('Количество кластеров должно быть >=1');
            return;
        }

        const formData = new FormData();
        formData.append(`${selectedFile.name}`, selectedFile);
        const result: ClusterizationData | null | true = await postClusterization(formData, clustersNumber, withCenters);
        if(result === true){

            handleSubmit(event);

        }else if(result === null){

            navigate('/login');

        }else if(result !== undefined){
            setClusterizationData((oldData: Object) => ({ ...oldData, ...result }))
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

    const handleCenterCheckBox = (event: any) => {
        event.preventDefault()
        setWithCenters(wc=>!wc);
    }

    const handleClusterNumber = (event: any) => {
        setClustersNumber(event.target.value);
    }

    const inputClusterNumber: InputData = {
        mainLabel: 'Введите количество кластеров',
        fieldName: 'clusters_num',
        defaultValue: '1',
        min: "1",
        onChangeHandle: handleClusterNumber
    };

    let clustersCenterCheckBox: CheckBoxData = {
        name:"clusters_center", 
        text:"Рисовать центры кластеров", 
        onChangeHandle:handleCenterCheckBox
    };

    let outputColumnsName: OutputData ={
        mainLabel: 'Имена столбцов',
        defaultValue: 'Здесь будут имена столбцов участвовавших в кластеризации',
        tipLabel: 'Столбцы, которые не являются числовыми, игнорируются',
        value: null
    }

    let outputClusters: OutputData ={
        mainLabel: 'Кластеры',
        defaultValue: 'Здесь будет массив кластеров',
        tipLabel: 'Элемент массива - индекс кластера, к которому принадлежит элемент',
        value: null
    }

    let outputClustersCenters: OutputData ={
        mainLabel: 'Центры кластеров',
        defaultValue: 'Здесь будут центры кластеров',
        value: null
    }

    let clustersCenters: JSX.Element[] = [];
    for(let center in clusterizationData.clusters_centers){
        let v: string = "";
        for(let index in clusterizationData.clusters_centers[center]){
            v+=clusterizationData.clusters_centers[center][index].toFixed(4) + " "
        }
        clustersCenters.push(
        <StringOutput {...{
            mainLabel:`Центр кластерa ${center}`,
            value: v,
            defaultValue: '',
        }}/>)
    }


    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <div className="template-section">
                    <div>
                        <h2>Кластеризация</h2>
                    </div>
                </div>
                <section className="functions-list row mt-2 mb-3">
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Параметры
                            </div>
                            <MethodPanel onChange={handleFileSelect} onSend={handleSubmit} />
                            <NumberInput {...inputClusterNumber} />
                            <CheckBox {...clustersCenterCheckBox} />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Результат
                            </div>
                            <ImagePlace image={image} />
                            <StringOutput {...outputColumnsName} {...{value: clusterizationData.columns_names}} />
                            <StringOutput {...outputClusters} {...{value: clusterizationData.clusters_labels}} />
                            {clustersCenters.length === 0 && <StringOutput {...outputClustersCenters} {...{value: clusterizationData.clusters_centers}} />}
                            {clustersCenters.length > 0 && clustersCenters }
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Clusterization;