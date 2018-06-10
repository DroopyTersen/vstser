import * as React from 'react';
const image1 = "/images/personaltoken1.png";
const image2 = "/images/personaltoken2.PNG";
const image3 = "/images/personaltoken3.PNG";

const getPersonalAccessTokenUrl = function(account) {
    account = account || "<YOUR_ACCOUNT>";
    return "https://" + account + ".visualstudio.com/_details/security/tokens";
}
export default class PersonalTokenHelper extends React.PureComponent<PersonalTokenHelperProps, {}> {
    onBtnClick = () => {
        if (this.props.account) {
            window.open(getPersonalAccessTokenUrl(this.props.account))
        }
    }
    render() {
        const styles = { opacity: this.props.account ? 1 : .5 }
        return (
            <div className='personal-token-helper' style={styles}>
                <h3>What's this Personal Token thing?!</h3>
                <p>To talk to VSTS you'll need to grab a 'Personal Access Token'. Don't worry, it only takes 30 seconds.</p>
                
                <div className='img-caption'>1. Click this button to go directly to the page you need in your VSTS</div>
                <button className='button' onClick={this.onBtnClick} type='button' disabled={!this.props.account}>Go</button>
                <div className='img-caption'>2. Click 'Add'</div>
                <img src={image1} />
                <div className='img-caption'>3. Fill in the values and click 'Create Token' at the bottom</div>              
                <img src={image2} />
                <div className='img-caption'>4. Copy the circled token and paste it in the textbox above</div>              
                <img src={image3} />
            </div>
        );
    }
}

export interface PersonalTokenHelperProps {
    account?:string
}