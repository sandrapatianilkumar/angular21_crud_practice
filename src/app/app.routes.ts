import { Routes } from '@angular/router';
import { Databinding } from './components/databinding/databinding';
import { SignalComponent } from './components/signal/signalComponent';
import { Variables } from './components/variables/variables';
import { Notfound } from './components/notfound/notfound';
import { Batchmaster } from './components/batchmaster/batchmaster';
import { Controlflow } from './components/controlflow/controlflow';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { UserMaster } from './components/user-master/user-master';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { Projectcompetation } from './components/projectcompetation/projectcompetation';
import { Signalformex } from './components/signalformex/signalformex';

export const routes: Routes = [
    {
        path: '', component: Batchmaster, pathMatch: 'full'
    },
    {
        path: 'databinding', component: Databinding
    }, {
        path: 'signal', component: SignalComponent
    },
    {
        path: 'variables', component: Variables
    },
    {
        path: 'batch', component: Batchmaster
    },
    {
        path: 'control-flow', component: Controlflow
    },
    {
        path: 'dynamic-css-class', component: DynamicCssClass
    },
    {
        path: 'usermaster', component: UserMaster
    },
    {
        path: 'reactiveuser', component: ReactiveUser
    },
    {
        path: 'projectcompetation', component: Projectcompetation
    },{
        path: 'signalformex', component: Signalformex
    },
    {
        path: '**', component: Notfound
    }
];
