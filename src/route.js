import React from 'react';
import {Switch,Route,BrowserRouter,Link} from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/login/login/index';
import Register from './pages/login/register/index';
import Disease from './pages/disease-related/index';
import Questionnaire from './pages/cognition/question';
import Ques from './pages/questionnaire/ques';
import EditQues from './pages/questionnaire/edit'
import AddQues from './pages/questionnaire/add'
import Check from './pages/questionnaire/check/index';
import Fill from './pages/questionnaire/fill/index';
import Edit from './pages/questionnaire/edit/index';
import UserInfo from './pages/userinfo/index';
import History from './pages/history/index';
import Diagnosis from './pages/history/diagnosis/index';
import Cognition from './pages/history/cognition/index';
import MMSE from './pages/history/mmse/index';
import MOCA from './pages/history/moca/index';
import NoMatch from './pages/nomatch/nomatch';
import Physicochemical from './pages/history/physicochemical/index';

export default class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <App>
                        <Route path={'/'} render={()=>
                            <Admin>
                                <Switch>
                                    <Route path={'/admin/disease'} component={Disease}/>
                                    <Route path={'/admin/syndromeType'} component={Ques}/>
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/fill" component={Fill} />
                                    <Route exact path="/check" component={Check} />
                                    <Route exact path="/edit" component={EditQues} />
                                    <Route exact path="/add" component={AddQues} />
                                    <Route exact path="/admin/userinfo" component={UserInfo} />
                                    <Route exact path="/history" component={History} />
                                    <Route exact path="/diagnosis" component={Diagnosis} />
                                    <Route exact path="/cognition" component={Cognition} />
                                    <Route exact path="/mmse" component={MMSE} />
                                    <Route exact path="/moca" component={MOCA} />
                                    <Route exact path="/physicochemical" component={Physicochemical} />
                                    <Route component={NoMatch}/>
                                </Switch>
                            </Admin>
                        }/>
                </App>
            </BrowserRouter>
        )
    }
}