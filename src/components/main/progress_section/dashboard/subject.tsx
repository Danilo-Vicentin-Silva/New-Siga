import React from "react";
import { Subject_styled } from "../../../../stylecomponents/main_styled/progress_styled/dashboard/subject_styled";
interface Props{
    icon: JSX.Element
    title: string
}

const Subject: React.FC<Props> = ({icon, title}) => {
    return (
        <Subject_styled>
            <h3>Subject</h3>
        </Subject_styled>
    );
};
 
export default Subject