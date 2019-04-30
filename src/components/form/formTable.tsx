import React, {createRef} from 'react';
import FormTableRow from "./formTableRow";
import '../../style/form-styles.css';
import '../../classes/Person';
import {FormState} from "../../classes/FormState";
import Person from "../../classes/Person";
import {instanceOf, number, object, string} from "prop-types";
import {create} from "domain";

interface IProps {
}

class FormTable extends React.Component<IProps, FormState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            personalData: new Map(Object.entries(new Person())),
            isInputCorrect: new Map(Object.entries(new Person())),
        };
        this.setStartStateValues();
    }

    setStartStateValues = () => {
        this.state.isInputCorrect.set('drivingLicense', true);
        this.state.isInputCorrect.set('male', true);
        this.state.isInputCorrect.set('comments', true);
    };

    handler = (e: React.ChangeEvent<HTMLElement>, isInputCorrect: boolean) => {
        if (e.nativeEvent.type === 'input') {
            let temp: React.ChangeEvent<HTMLInputElement> = e as React.ChangeEvent<HTMLInputElement>;
            if (temp.currentTarget.name == 'drivingLicense') {
                this.setState({
                    personalData: this.state.personalData.set(temp.currentTarget.name, temp.currentTarget.checked),
                });
            } else {
                if (isInputCorrect) {
                    this.setState({
                        personalData: this.state.personalData.set(temp.currentTarget.name, temp.currentTarget.value),
                    });
                }
                this.setState({
                    isInputCorrect: this.state.isInputCorrect.set(temp.currentTarget.name, isInputCorrect),
                });
            }
        } else if (e.nativeEvent.type === 'change') {
            let temp: React.ChangeEvent<HTMLSelectElement> = e as React.ChangeEvent<HTMLSelectElement>;
            this.setState({
                personalData: this.state.personalData.set(temp.currentTarget.name, temp.currentTarget.value),
            });
        }
    };

    canBeSubmitted = () => {
        let allAreCorrect: boolean = true;
        this.state.isInputCorrect.forEach(value => {
                if (!value) {
                    allAreCorrect = false;
                }
            }
        );
        return allAreCorrect;
    };

    render() {
        let isDisabled = !this.canBeSubmitted();
        return (
            <div>
                <div className='container'>
                    <div>
                        <FormTableRow action={this.handler} name='name' labelText='Imię'
                                      validationRegex='^[A-ZĄĆĘŁŃŚÓŹŻ][a-ząćęłńóśźż]+$'/>
                        <FormTableRow action={this.handler} name='surname' labelText='Nazwisko'
                                      validationRegex='^[A-ZĄĆĘŁŃŚÓŹŻ][a-ząćęłńóśźż]+([ -][A-ZĄĆĘŁŃŚÓŹŻ][a-ząćęłńóśźż]+)?$'/>
                        <FormTableRow action={this.handler} name='city' labelText='Miasto'
                                      validationRegex='^[A-ZĄĆĘŁŃŚÓŹŻ]+([a-ząćęłńśóźż]+)?(([ -][A-ZĄĆĘŁŃŚÓŹŻ][a-ząćęłńśóźż]+)?){0,5}$'/>
                        <FormTableRow action={this.handler} name='street' labelText='Ulica'
                                      validationRegex='^[A-ZĄĆĘŁŃŚÓŹŻ]+([a-ząćęłńśóźż]+)?([0-9]+)?(([ ](([A-ZĄĆĘŁŃŚÓŹŻ]+)?([a-ząćęłńśóźż]+)?)?([0-9]+)?)?){0,4}$'/>
                        <FormTableRow action={this.handler} name='houseNumber' labelText='Numer domu'
                                      validationRegex='^\d+([a-z|A-Z]+)?$'/>
                        <FormTableRow action={this.handler} name='flatNumber' labelText='Numer mieszkania'
                                      validationRegex='^\d+$'/>
                        <FormTableRow action={this.handler} name='dateOfBirth' labelText='Data urodzenia (dd-mm-rrrr)'
                                      validationRegex='^([0-2][0-9]|[3][0-1])[.\-]([0][1-9]|[1][0-2])[.\-]19[0-9][0-9]|20[0-9][0-9]$'/>
                        <FormTableRow action={this.handler} name='emailAddress' labelText='Adres email'
                                      validationRegex='[A-Za-z0-9._%+-]+@[A-Za-z0-9._-]+\.[a-z]{2,}$'/>
                        <FormTableRow action={this.handler} name='male' labelText='Płeć'
                                      validationRegex='.*'/>
                        <FormTableRow action={this.handler} name='drivingLicense' labelText='Prawo jazdy'
                                      validationRegex='.*'/>
                        <FormTableRow action={this.handler} name='comments' labelText='Uwagi'
                                      validationRegex='.*'/>
                    </div>
                </div>
                <div className='buttonWrapper'>
                    <div className='rowWrapper'>
                        <button disabled={isDisabled} className='button'>Zatwierdź</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormTable;