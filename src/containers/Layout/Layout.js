import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import { Form } from '../Form/Form';
import { Results } from '../Results/Results';
import styles from './Layout.module.css';

export function Layout() {
    return (
        <div className={styles.Layout}>
            <div className={styles.TopNav}>
                <Link to='/'><label>Ana Sayfa</label></Link>
                <Link to='/results'><label>Kayıtları Göster</label></Link>
            </div>
            <Switch>
                <Route path='/results' component={Results} />
                <Route path='/' component={Form}/>
            </Switch>
        </div>
    )
}
