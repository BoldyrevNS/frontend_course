import React from 'react';
import '../css/home.css';
import operations from '../data_operations';
import Header from '../components/header';
import OperationComponent from '../components/operationComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    let operationsComponents: JSX.Element[] = operations.map(op => 
        <OperationComponent 
        key={op.id} 
        id={op.id} 
        img_name={op.img_name} 
        name={op.name} 
        description={op.description} 
        link={op.link}
        page_link={op.page_link} 
    />);

    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <section className="products-list row">
                    {operationsComponents}
                </section>
            </main>
        </React.Fragment>
    );
}

export default Home;