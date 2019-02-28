import React from 'react';
import {Switch,Route,HashRouter,Link} from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Disease from './pages/disease-related/index';
import Questionnaire from './pages/cognition/question';
import Ques from './pages/questionnaire/ques'
import Check from './pages/check/index';
import Fill from './pages/fill/index';
import Edit from './pages/edit/index';
import UserInfo from './pages/userinfo/index';
import History from './pages/history/index';
import HistoryDetail from './pages/history-detail/index';
import Diagnosis from './pages/diagnosis/index';
import Cognition from './pages/cognition/index';
import MMSE from './pages/mmse/index';
import MOCA from './pages/moca/index';
import NoMatch from './pages/nomatch/nomatch';
import EditQues from './pages/questionnaire/edit'
import AddQues from './pages/questionnaire/add'

export default class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                        <Route path={'/'} component={()=>
                            <Admin>
                                <Switch>
                                    <Route path={'/admin/disease'} component={Disease}/>
                                    <Route path={'/admin/syndromeType'} component={Ques }/>
                                    <Route exact path="/fill" component={Fill} />
                                    <Route exact path="/check" component={Check} />
                                    {/*<Route exact path="/edit" component={Edit} />*/}
                                    <Route exact path="/admin/userinfo" component={UserInfo} />
                                    <Route exact path="/history" component={History} />
                                    <Route exact path="/historyDetail" component={HistoryDetail} />
                                    <Route exact path="/diagnosis" component={Diagnosis} />
                                    <Route exact path="/cognition" component={Questionnaire} />
                                    <Route exact path="/mmse" component={MMSE} />
                                    <Route exact path="/moca" component={MOCA} />
                                    <Route exact path="/edit" component={EditQues} />
                                    <Route exact path="/add" component={AddQues} />
                                    <Route component={NoMatch}/>
                                </Switch>
                            </Admin>
                        }/>
                </App>
            </HashRouter>
        )
    }
}