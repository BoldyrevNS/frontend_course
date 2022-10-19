import './error.scss';

interface IErrorProps{
  img: string;
  header: string | number;
  p: string
}

export function Error({img, header, p}: IErrorProps) {

    return (
        <div className="error-container">
            <h1>{header}</h1>
            <p>{p}</p>
            <img src={img} alt={"cat"}></img>
        </div>
    );
}

export default Error;