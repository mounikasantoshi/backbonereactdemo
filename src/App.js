import './App.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import _ from 'underscore'
import UserInfo from './component/UserInfo'
import Counter from './component/Counter'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // a Backbone view that greets a user
  const GreetingView = Backbone.View.extend({
    template: _.template(
      "<div><div id='user-info'></div><div><p class='tasks-notice'>Hey, you've got <b><%= tasks %></b> tasks to work on!</p></div></div> <div id='counter'><h1></h1></div>",
    ),

    render() {
      this.$el.html(this.template(this.model.toJSON()))

      const count = Backbone.Model.extend()

      const counter1 = new count({
        count: 0,
      })
      // append react component to Backbone template
      var name = this.model.get('name')
      var title = this.model.get('title')
      var img = this.model.get('img')
      var count = this.counter1.get('count')

      var counter = counter1.toJSON().name

      ReactDOM.render(
        <UserInfo name={name} title={title} img={img} />,
        this.$('#user-info').get(0),
      )
      ReactDOM.render(<Counter count={counter} />, this.$('#counter').get(0))

      return this
    },
    remove() {
      ReactDOM.unmountComponentAtNode(this.el)
      Backbone.View.prototype.remove.call(this)
    },
  })

  const User = Backbone.Model.extend({
    urlRoot: '/user',
    defaults: {
      name: '',
      title: '',
      img: '',
      tasks: 0,
    },
  })

  const model = new User({
    name: 'mounika',
    title: 'Software Developer',
    img: 'https://s.gravatar.com/avatar/e1a7a27cac0cb585123d84b61e443b06?s=80',
    tasks: 5,
  })
  const view = new GreetingView({ model, el: '#greeting-view' })
  view.render()

  return <div className="App"></div>
}

export default App
