import React, {useState} from "react";
import {Step1} from "./Step1";
import {Step2} from "./Step2";

export const TestForm: React.FC = () => {
    const [page, setPage] = useState<number>(1);

    const onSubmit = (a: any) => {
        console.log(a)
        nextPage();
    }

    const nextPage = () => {
        setPage(page + 1);
    }

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    return (
        <div>
            {page === 1 && <Step1 onSubmit={nextPage}/>}
            {page === 2 && <Step2 onSubmit={onSubmit} previousPage={previousPage}/>}
            {page === 3 && <div>Success</div>}
        </div>
    )
}
