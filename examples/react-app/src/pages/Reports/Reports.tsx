import * as React from 'react'
import './Reports.css'
import svg11 from './assets/svg11.svg'
import svg16 from './assets/svg16.svg'
import mainMenu from './assets/mainMenu.svg'
import label2 from './assets/label2.svg'
import svg12 from './assets/svg12.svg'
import label from './assets/label.svg'
import svg13 from './assets/svg13.svg'
import label1 from './assets/label1.svg'
import svg15 from './assets/svg15.svg'
import svg10 from './assets/svg10.svg'
import image from './assets/image.svg'
import svg17 from './assets/svg17.svg'
import image1 from './assets/image1.svg'
import svg14 from './assets/svg14.svg'

const Reports = () => {
  return (
    <div style={{ display: 'block', width: '1200px', margin: '10px auto' }}>
      <div className="httpsshankarancsbgra">
        <img className="main-menu" src={mainMenu} />
        <div className="flex-container">
          
          <div className="flex-container-1">
            <span className="welcome-to">Welcome to</span>
            <span className="grafana-cloud">Grafana Cloud</span>
            <div className="div-1">Free plan</div>
          </div>
          <div className="flex-container-2">
            <img className="svg-10" src={svg10} />
            <span className="stacks">Stacks</span>
            <img className="svg-11" src={svg11} />
            <span className="users">Users</span>
            <img className="svg-12" src={svg12} />
            <span className="api-keys">API keys</span>
            <img className="svg-13" src={svg13} />
            <span className="billing-usage-dashboa">
              Billing&#x2F;Usage dashboard
            </span>
            <img className="svg-14" src={svg14} />
            <span className="manage-subscription">Manage subscription</span>
            <button className="rlahlutnipqeg">
              <span className="connect-data">+ Connect data</span>
            </button>
          </div>
          <div className="divhome-metrics-body">
            <div className="flex-container-3">
              <span className="current-usage">Current usage</span>
              <span className="limits-reset-monthly">
                *Limits reset monthly
              </span>
            </div>
            <div className="flex-container-4">
              <span className="num-13-max">1&#x2F;3 max</span>
              <span className="users-1">Users</span>
            </div>
            <div className="flex-container-5">
              <span className="num-010-k-max">0&#x2F;10k max</span>
              <span className="metrics">Metrics*</span>
            </div>
            <div className="flex-container-6">
              <span className="num-050-gb-max">0&#x2F;50GB max</span>
              <span className="logs">Logs*</span>
            </div>
            <div className="flex-container-7">
              <span className="num-050-gb-max-1">0&#x2F;50GB max</span>
              <span className="traces">Traces*</span>
            </div>
            <div className="flex-container-8">
              <button className="razsaehsqayfy">
                <span className="upgrade-plan">Upgrade plan →</span>
              </button>
              <span className="tired-of-usage-limit">
                Tired of usage limits?
              </span>
            </div>
          </div>
          <div className="flex-container-9">
            <div className="div-2">
              <span className="recent-alerts">Recent Alerts</span>
              <span className="no-alerts-matching-f">
                No alerts matching filters
              </span>
              <span className="all-alerts">All alerts →</span>
            </div>
            <div className="div-3">
              <div className="flex-container-10">
                <span className="dashboards">Dashboards</span>
                <span className="all-dashboards">All dashboards →</span>
              </div>
              <span className="starred-dashboards">Starred dashboards</span>
              <span className="recently-viewed-dash">
                Recently viewed dashboards
              </span>
              <div className="div-4">
                <div className="flex-container-11">
                  <span className="grafana-cloud-billin">
                    Grafana Cloud Billing&#x2F;Usage
                  </span>
                  <span className="grafana-cloud-1">GrafanaCloud</span>
                </div>
                <img className="label" src={label} />
              </div>
              <div className="div-5">
                <span>test</span>
                <img className="label-1" src={label1} />
              </div>
              <div className="div-6">
                <div className="flex-container-12">
                  <span className="synthetic-monitoring">
                    Synthetic Monitoring Summary
                  </span>
                  <span className="synthetic-monitoring-1">
                    Synthetic Monitoring
                  </span>
                </div>
                <img className="label-2" src={label2} />
              </div>
            </div>
            <div className="div-7">
              <span className="help-and-documentati">
                Help and documentation
              </span>
              <div className="flex-container-13">
                <img className="svg-15" src={svg15} />
                <span className="documentation">Documentation</span>
                <img className="svg-16" src={svg16} />
                <span className="support-ticket">Support ticket</span>
                <img className="svg-17" src={svg17} />
                <span className="community">Community</span>
              </div>
              <div className="div-8">
                <img className="image" src={image} />
                <span className="grafana-cloud-2">Grafana Cloud</span>
                <span className="getting-started-with">
                  Getting started with Grafana Cloud →
                </span>
              </div>
              <button className="div-9">
                <img className="image-1" src={image1} />
                <span className="grafana-university">Grafana University</span>
                <span className="learn-with-grafana-u">
                  Learn with Grafana University →
                </span>
              </button>
            </div>
          </div>
          <span className="cloud-solutions">Cloud solutions</span>
        </div>
      </div>
    </div>
  )
}

export default Reports
