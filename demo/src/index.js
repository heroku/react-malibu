import React from 'react'
import { render } from 'react-dom'

import { MalibuSprites, MalibuIcon } from '../../src'

const iconIds = ["add-16","add-28","add-badge-16","add-badge-28","add-mark-16","add-mark-28","add-ring-16","add-ring-28","alert-badge-16","alert-badge-28","alert-mark-16","alert-mark-28","alert-ring-16","alert-ring-28","app-16","app-28","app-dead-16","app-dead-28","app-locked-16","app-locked-28","app-review-16","app-review-28","app-sleeping-16","app-sleeping-28","attach-16","attach-28","build-16","build-28","caret-16","caret-28","chart-16","chart-28","check-16","check-28","configure-16","configure-28","confirm-16","confirm-28","console-16","console-28","contact-16","contact-28","data-cassandra-16","data-cassandra-28","data-kafka-16","data-kafka-28","data-postgres-16","data-postgres-28","data-redis-16","data-redis-28","delete-16","delete-28","deploy-16","deploy-28","device-16","device-28","direction-down-16","direction-down-28","direction-left-16","direction-left-28","direction-right-16","direction-right-28","direction-up-16","direction-up-28","docs-16","docs-28","edit-16","edit-28","edit-accept-16","edit-accept-28","edit-modify-16","edit-modify-28","edit-reject-16","edit-reject-28","element-16","element-28","error-badge-16","error-badge-28","error-mark-16","error-mark-28","error-ring-16","error-ring-28","failure-badge-16","failure-badge-28","failure-ring-16","failure-ring-28","favorite-16","favorite-28","favorite-remove-16","favorite-remove-28","git-branch-16","git-branch-28","git-commit-16","git-commit-28","git-merge-16","git-merge-28","git-pr-16","git-pr-28","help-badge-16","help-badge-28","help-mark-16","help-mark-28","help-ring-16","help-ring-28","info-badge-16","info-badge-28","info-mark-16","info-mark-28","info-ring-16","info-ring-28","language-clojure-16","language-clojure-28","language-go-16","language-go-28","language-gradle-16","language-gradle-28","language-java-16","language-java-28","language-node-16","language-node-28","language-php-16","language-php-28","language-python-16","language-python-28","language-ruby-16","language-ruby-28","language-scala-16","language-scala-28","launch-16","launch-28","lock-locked-16","lock-locked-28","lock-unlocked-16","lock-unlocked-28","logo-block-16","logo-block-28","logo-mark-16","logo-mark-28","logo-outline-16","logo-outline-28","logs-16","logs-28","metrics-16","metrics-28","nav-back-16","nav-back-28","nav-forward-16","nav-forward-28","nav-go-16","nav-go-28","notification-16","notification-28","open-16","open-28","pipeline-16","pipeline-28","remove-badge-16","remove-badge-28","remove-mark-16","remove-mark-28","remove-ring-16","remove-ring-28","restart-16","restart-28","rollback-16","rollback-28","search-16","search-28","service-bitbucket-16","service-bitbucket-28","service-dropbox-16","service-dropbox-28","service-git-16","service-git-28","service-github-16","service-github-28","service-github-enterprise-16","service-github-enterprise-28","service-gitlab-16","service-gitlab-28","service-slack-16","service-slack-28","settings-16","settings-28","setup-16","setup-28","sfdc-16","sfdc-28","success-badge-16","success-badge-28","success-mark-16","success-mark-28","success-ring-16","success-ring-28","sync-16","sync-28","team-16","team-28","time-16","time-28","transfer-16","transfer-28","user-16","user-28","warning-badge-16","warning-badge-28","warning-mark-16","warning-mark-28","warning-ring-16","warning-ring-28"]


class Demo extends React.Component {
  state = {
    fill: 'purple'
  }

  handleGradient = (e) => {
    const fill = e.currentTarget.getAttribute('data-gradient')
    console.debug('handleGradient called!', fill)

    this.setState({fill})
  }

  render() {
    const { fill } = this.state
    const iconDemos = iconIds.map((i) => (
      <li className='pa3 pa4-ns bb b--black-10' key={i}>
        <h3 >{i}</h3>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={12} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>12</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={16} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>16</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={20} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>20</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={24} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>24</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={28} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>28</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={32} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>32</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={48} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>48</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={64} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>64</p>
        </div>
        <div className='ma1 mh2 dib'>
          <MalibuIcon name={i} size={128} fillClass={fill} />
          <p className='mt1 pt1 mb0 f6 black-50 tc bt b--black-10'>128</p>
        </div>
      </li>
    ))


    return <div className='mw7 center'>
      <h1 className='tc pb3'>MalibuSprites Demo</h1>
      <MalibuSprites />

      <div className='bb b--black-30 tc pb3'>
        <p className='f5 black-50 i mt3 mb0'>Select a fill color:</p>
        <a className='pointer grow dib ma2' data-gradient='purple' onClick={this.handleGradient}><svg width={48} height={48} shapeRendering='crispEdges' className='ma0 pa0 dib malibu-fill-gradient-purple'><rect x={0} y={0} width={48} height={48}/></svg></a>
        <a className='pointer grow dib ma2' data-gradient='dark-gray' onClick={this.handleGradient}><svg width={48} height={48} className='ma0 pa0 malibu-fill-gradient-dark-gray'><rect x={0} y={0} width={48} height={48}/></svg></a>
        <a className='pointer grow dib ma2' data-gradient='red' onClick={this.handleGradient}><svg width={48} height={48} className='ma0 pa0 malibu-fill-gradient-red'><rect x={0} y={0} width={48} height={48} /></svg></a>
        <a className='pointer grow dib ma2' data-gradient='orange' onClick={this.handleGradient}><svg width={48} height={48} className='ma0 pa0 malibu-fill-gradient-orange'><rect x={0} y={0} width={48} height={48} /></svg></a>
        <a className='pointer grow dib ma2' data-gradient='green' onClick={this.handleGradient}><svg width={48} height={48} className='ma0 pa0 malibu-fill-gradient-green'><rect x={0} y={0} width={48} height={48} /></svg></a>
        <a className='pointer grow dib ma2' data-gradient='blue' onClick={this.handleGradient}><svg width={48} height={48} className='ma0 pa0 malibu-fill-gradient-blue'><rect x={0} y={0} width={48} height={48} /></svg></a>
      </div>

      <ul className='list pl0'>
        {iconDemos}
      </ul>
    </div>
  }
}

// inject purple3's stylesheet
const head = document.getElementsByTagName('head')[0]
const cssLink = document.createElement('link')
cssLink.href = 'https://www.herokucdn.com/purple3/latest/purple3.min.css'
cssLink.type = 'text/css'
cssLink.rel = 'stylesheet'
head.appendChild(cssLink)

render(<Demo/>, document.querySelector('#demo'))
