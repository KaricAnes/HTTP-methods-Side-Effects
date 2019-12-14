import React, {Component} from 'react';

const asyncComponent = (importComponent) => {

return class extends Component{

    state = {
        component:null
    }

    componentDidMount () {
        importComponent()
           .then(cmp => {
               this.setState({component: cmp.default});
           });
    }

    render () {

        const C = this.state.component;

        return C ? <C {...this.props}/> : null;

        {/*Provjeravamo da li je C settano, ako je settano onda cemo renderovati C kao normalnu React componentu!
        Korsitili smo ovaj spread operator kao trik  da posaljemo props koje nam trebaju */}
    }
}

}

export default asyncComponent; 