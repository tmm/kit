import React from 'react';
import { Svg } from 'expo';

const d = `M7.25675676,7.44054054 L2.21621622,12.427027 L2.21621622,1.33783784 C2.21249512,0.731596728 1.7184073,0.242951734 1.11216216,0.245945946 C0.820906313,0.244148958 0.540885388,0.358221535 0.333794996,0.563030637 C0.126704604,0.76783974 0.00953734982,1.04657995 0.00810810811,1.33783784 L0.00810810811,15.0594595 C0.00953605686,15.3502363 0.126604241,15.6284953 0.33348072,15.8328365 C0.540357199,16.0371777 0.82003846,16.1508061 1.11081081,16.1486486 C1.39864865,16.1486486 1.68108108,16.0405405 1.89189189,15.8310811 L8.05,9.74324324 L14.2094595,15.8337838 C14.6414732,16.2623499 15.3382565,16.2623499 15.7702703,15.8337838 C15.9778628,15.6304374 16.0948507,15.3520797 16.0948507,15.0614865 C16.0948507,14.7708933 15.9778628,14.4925356 15.7702703,14.2891892 L9.61216216,8.2027027 L15.7702703,2.11216216 C15.9778628,1.90881575 16.0948507,1.63045809 16.0948507,1.33986486 C16.0948507,1.04927164 15.9778628,0.770913977 15.7702703,0.567567568 C15.3370577,0.141922068 14.642672,0.141922068 14.2094595,0.567567568 L7.28378378,7.41891892 C7.27837838,7.41891892 7.27432432,7.42432432 7.27027027,7.42837838 L7.25675676,7.44189189 L7.25675676,7.44054054 L7.25675676,7.44054054 Z M25.5364865,16.1527027 C25.2454635,16.1545002 24.9656466,16.0406129 24.7585951,15.8360956 C24.5515436,15.6315784 24.4342189,15.3531852 24.4324324,15.0621622 L24.4324324,1.34054054 C24.4324324,0.737837838 24.927027,0.248648649 25.5364865,0.248648649 C26.1445946,0.248648649 26.6405405,0.737837838 26.6405405,1.34054054 L26.6405405,15.0621622 C26.638754,15.3531852 26.5214294,15.6315784 26.3143779,15.8360956 C26.1073264,16.0406129 25.8275095,16.1545002 25.5364865,16.1527027 L25.5364865,16.1527027 Z M40.5675676,2.43243243 L40.5675676,15.0621622 C40.5675676,15.6648649 41.0608108,16.1527027 41.6702703,16.1527027 C42.2783784,16.1527027 42.7743243,15.6662162 42.7743243,15.0621622 L42.7743243,2.43243243 L48.6094595,2.43243243 C48.9008409,2.43422996 49.1810015,2.3202002 49.3883064,2.11542956 C49.5956114,1.91065893 49.7130784,1.631922 49.7148649,1.34054054 C49.7111438,0.734299431 49.2170559,0.245654436 48.6108108,0.248648649 L34.7297297,0.248648649 C34.1240112,0.24640208 33.6307481,0.73482925 33.627027,1.34054054 C33.627027,1.94324324 34.1216216,2.43243243 34.7310811,2.43243243 L40.5689189,2.43243243 L40.5675676,2.43243243 L40.5675676,2.43243243 Z`

export default class Logo extends React.Component {
  state = {
    height: 18,
    width: 51
  };

  render() {
    return (
      <Svg
        width={this.state.width}
        height={this.state.height}
        style={this.props.style}
      >
        <Svg.Path
          d={d}
          stroke="#000"
          strokeWidth=".5"
        />
      </Svg>
    );
  }
}

module.exports = Logo;
