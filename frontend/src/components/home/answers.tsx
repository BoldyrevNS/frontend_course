import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/home.css';
import 'bootstrap/js/dist/collapse'
import React from 'react';

const Answers = () => {return (<div className="container font-poppins border-0">
<h2 className="font-poppins text-white my-4 bg-black border-0">Часто задаваемые вопросы</h2>
<div className="accordion accordion-flush bg-black border-0" id="accordionFlushExample">
    <div className="accordion-item bg-black border-0">
        <h2 className="accordion-header bg-black border-0" >
            <button className="accordion-button collapsed bg-black text-white border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne" >
                Зачем ?
            </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse bg-black text-white border-0" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body bg-black text-start border-0">Просто <code></code> </div>
        </div>
    </div>
    <div className="accordion-item bg-black border-0">
        <h2 className="accordion-header bg-black border-0" >
            <button className="accordion-button collapsed bg-black text-white border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo" >
               В чем смысл?
            </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse bg-black text-white border-0" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body bg-black text-start border-0">Просто</div>
        </div>
    </div>
    <div className="accordion-item bg-black border-0">
        <h2 className="accordion-header bg-black border-0" >
            <button className="accordion-button collapsed bg-black text-white border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree" >
                Да?
            </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse bg-black text-white border-0" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body bg-black text-start border-0">Нет?</div>
        </div>
    </div>

  
</div>
</div>)
}
export default Answers