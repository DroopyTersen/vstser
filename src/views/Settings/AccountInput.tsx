import * as React from 'react';
import hub from "../../hub";
import { debounce } from '../../utils/utils';

const getVSTSUrl = function(account) {
    account = account || "<YOUR_ACCOUNT>";
    return "https://" + account + ".visualstudio.com";
}
export default class AccountInput extends React.PureComponent<AccountPickerProps, {}> {
    state = {
        account: this.props.account || "",
    }
    debouncedTrigger = debounce((account) => {
        hub.trigger("settings:accountChange", account);
    }, 400) as any
    onChange = (e) => {
        try {
            let account = e.currentTarget.value;
            this.setState({account});
            if (!account) hub.trigger("settings:accountChange", "");
            else this.debouncedTrigger(account);
        } catch (err) {
            console.log("Error getting Account Input")
        }
    }
    
    render() {
        return (
            <div className='account-picker'>
                <div className='form-control'>
                    <label>VSTS Account</label>
                    <input onChange={this.onChange} value={this.state.account} />
                </div>
                <div className='url-preview'>{getVSTSUrl(this.state.account)}</div>
            </div>
        );
    }
}

export interface AccountPickerProps {
    account?:string,
}