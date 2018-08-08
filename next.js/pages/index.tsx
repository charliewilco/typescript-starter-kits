import * as React from 'react'

export interface IIndexProps {
  name: string
}

export default class Index extends React.Component<IIndexProps, void> {
  static getInitialProps(): IIndexProps {
    return {
      name: "Charlie"
    }
  }


  render() {
    return (
      <h1>{this.props.name}</h1>
    )
  }
}