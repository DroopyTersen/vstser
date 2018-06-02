import * as React from 'react';
import hub from "../../hub";

export default class TokenInput extends React.PureComponent<TokenInputProps, {}> {
    onChange = (e) => {
        try {
            let token = e.currentTarget.value;
            hub.trigger("settings:tokenChange", token);
        } catch (err) {
            console.log("TOKEN INPUT ERROR", err);
        }
    }
    render() {
        let val = !this.props.account ? "" : this.props.token;
        return (
            <div className='token-input'>
                <div className='form-control'>
                    <label>Personal Access Token</label>
                    <input disabled={!this.props.account} onChange={this.onChange} value={val} />
                </div>
            </div>
        );
    }
}

export interface TokenInputProps {
    token?:string,
    account?:string,
}