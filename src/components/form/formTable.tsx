import React, {createRef} from 'react';
import FormTableRow from "./formTableRow";
import '../../style/form-styles.css';
import '../../classes/Person';
import {FormState} from "../../classes/FormState";
import Person from "../../classes/Person";

interface IProps {
}

class FormTable extends React.Component<IProps, FormState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            personalData: new Map(Object.entries(new Person())),
            isInputCorrect: new Map(Object.entries(new Person())),
        };
        //this.submitButtonRef = React.createRef();
    }

    myRef = createRef<HTMLDivElement>();

    handler = (e: React.ChangeEvent<HTMLInputElement>, isInputCorrect: any) => {
        if (isInputCorrect) {
            this.setState({
                   personalData: this.state.personalData.set(e.currentTarget.name, e.currentTarget.value),
                });
        }
        this.setState({
            isInputCorrect : isInputCorrect.set(e.currentTarget.name, false),
        });

        let a = this.state.isInputCorrect.values();
        console.log(this.state.isInputCorrect.get('name') + "hehe");
        console.log(a);

    };

    render() {
        return (
            <div>
                <div className='container'>
                    <div>
                        <FormTableRow action={this.handler} name='name' labelText='Imię'
                                      validationRegex='^[A-ZĄĆĘŁŃŚÓŹŻ][a-ząćęłńóśźż]+$'/>
                        <FormTableRow action={this.handler} name='surname' labelText='Nazwisko'
                                      validationRegex='asd'/>
                        <FormTableRow action={this.handler} name='city' labelText='Miasto'
                                      validationRegex='asd'/>
                        <FormTableRow action={this.handler} name='street' labelText='Ulica'
                                      validationRegex='asd'/>
                        <FormTableRow action={this.handler} name='homeNumber' labelText='Numer domu'
                                      validationRegex='asd'/>
                        <FormTableRow action={this.handler} name='flatNumber' labelText='Numer mieszkania'
                                      validationRegex='asd'/>
                        <FormTableRow action={this.handler} name='dateOfBirth' labelText='Data urodzenia (dd-mm-rr)'
                                      validationRegex='asd'/>
                        <FormTableRow action={this.handler} name='emailAddress' labelText='Adres email'
                                      validationRegex='asd'/>
                        <FormTableRow action={this.handler} name='male' labelText='Płeć'
                                      validationRegex='asd'/>
                        <FormTableRow action={this.handler} name='drivingLicense' labelText='Prawo jazdy'
                                      validationRegex='asd'/>
                        <FormTableRow action={this.handler} name='comments' labelText='Uwagi'
                                      validationRegex='asd'/>
                    </div>
                </div>
                <div className='buttonWrapper'>
                    <div ref={this.myRef} className='rowWrapper'>
                        <button className='button'>Zatwierdź</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormTable;