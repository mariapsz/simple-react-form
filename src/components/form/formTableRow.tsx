import * as React from "react";
import '../../style/form-styles.css';

interface IProps {
    labelText: string,
    validationRegex: string,
    action: (e: React.ChangeEvent<HTMLElement>, isCorrect: boolean) => void,
    name: string,
}

interface IState {
    inputValue: string,
}

class FormTableRow extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    handleChange = (e: React.ChangeEvent<HTMLElement>) => {
        if (e.nativeEvent.type === 'input') {
            const temp: React.ChangeEvent<HTMLInputElement> = e as React.ChangeEvent<HTMLInputElement>;
            if (new RegExp(this.props.validationRegex).test(temp.currentTarget.value)) {
                e.currentTarget.style.borderColor = 'initial';
                this.props.action(e, true);
            } else {
                e.currentTarget.style.borderColor = '#F00';
                this.props.action(e, false);
            }
        } else if (e.nativeEvent.type === 'change') {
            this.props.action(e, true);
        }
    };

    render() {

        let inputType: any;
        switch (this.props.name) {
            case 'male': {
                inputType = <select name={this.props.name} onChange={this.handleChange}>
                    <option>kobieta</option>
                    <option>mężczyzna</option>
                </select>;
                break;
            }
            case 'drivingLicense': {
                inputType = <input type='checkbox' name={this.props.name} onChange={this.handleChange}/>;
                break;
            }
            case 'comments': {
                inputType = <textarea style={{height: '15vh'}} name={this.props.name} onChange={this.handleChange} maxLength={100}/>;
                break;
            }
            default: {
                inputType = <input onChange={this.handleChange} name={this.props.name} className='necessaryInput'/>;
                break;
            }
        }

        return (
            <div className='rowWrapper'>
                <div className='column'>
                    <label>
                        {this.props.labelText}
                    </label>
                </div>
                <div className='column'>
                    {inputType}
                </div>
            </div>
        );
    }
}

export default FormTableRow;