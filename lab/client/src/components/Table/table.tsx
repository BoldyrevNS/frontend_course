import TableWords from './TableWords/tableWords';
import './table.scss';
import { useContext, useState } from 'react';
import DataContext from '../context';
import AddWordForm from './AddWordForm/addWordForm'
import './form.scss'
import meme from '../../assets/img/cover4.jpg'
import Problem from '../Error/error';
import Loading from '../Loading/loading'

export function Table() {

    const context = useContext(DataContext);
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed)
    }

    if (context!.loading) {
        return (
            <Loading />
        )
    }

    else if (context!.getError) {
        return (
            <Problem img={meme} header={context!.errorStatus} p={context!.getError} />
        )
    }
    else {


        return (
            <div>
                <button className='add-btn' onClick={handleChange}>Add word form</button>
                <div className={!pressed ? "hide-form" : "form"}>
                    {
                        <AddWordForm
                            data={context!.data}
                            handlerAddWord={context!.handlerAddWord}
                        />
                    }
                </div>
                <div className="table">
                    <table>
                        <tbody>
                            <tr>
                                <th>Word</th>
                                <th>Transcription</th>
                                <th>Translate</th>
                                <th className="buttons-col"></th>
                            </tr>
                            {
                                context!.data.map((word) =>
                                    <TableWords
                                        key={word.id}
                                        id={word.id}
                                        english={word.english}
                                        transcription={word.transcription}
                                        russian={word.russian}
                                        handlerDelete={context!.handlerDelete}
                                        handlerInputSave={context!.handlerInputSave}
                                    />
                                )
                            }
                        </tbody>
                    </table >
                </div>
            </div>
        );
    }
}

export default Table;