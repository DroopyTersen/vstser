import * as React from 'react';
import View, { RouterView } from "../View/View";
import AccountInput from './AccountInput';
import { Settings } from '../../data/interfaces';
import "./SettingsView.scss";
import PersonalTokenHelper from './PersonalTokenHelper';
import TokenInput from './TokenInput';
export default class SettingsView extends React.PureComponent<SettingsViewProps, {}> {
    render() {
        let {account, personalToken} = this.props.settings;
        return (
            <View
                title="Settings"
                id="settings"
            >
                <AccountInput account={account} />
                <TokenInput token={personalToken} account={account}/>
                <PersonalTokenHelper account={account} />
            </View>
        );
    }
}

export interface SettingsViewProps extends RouterView {
    settings: Settings
}