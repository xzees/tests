import React from 'react'
import { match} from 'react-router-dom';
import routes from './routes';
import RootStore from 'stores';
import { inject,observer } from 'mobx-react';
import _ from 'lodash'
import AppRoute from 'common/components/AppRoute';

type Props = {
  match: match
  rootStore: RootStore
}

@inject('stores')
@observer
class HotelRoutes extends React.PureComponent<Props> {

  public moduleMetadata: any;

  constructor(props: Props) {
    super(props);
  }
  
  public render() {
    const match = this.props.match;
    
    return (
      <>
        {routes.map((item, i) => <AppRoute key={i} routeConfig={item} exact path={`${match.url}${item.path}`} component={item.component} />)}
      </>
    );
  }
}
export default HotelRoutes;