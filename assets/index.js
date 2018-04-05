class Comment extends React.Component {
  render() {
    return (
      <div className="content">
        {this.props.content}
      </div>
    )
  }
}

class BlogPost extends React.Component {
  render() {
    return (
      <div id="blog-post">

        <div id="blog-content">
          Dear Reader: Bjarne Stroustrup has the perfect lecture oration.
        </div>

        <Comment content={"I agree with this statement. - Angela Merkel"}/>
        <Comment content={"A universal truth. - Noam Chomsky"}/>
        <Comment content={"Truth is singular. Its 'versions' are mistruth. - Sonmi-451"}/>

      </div> 
    )
  }
}
