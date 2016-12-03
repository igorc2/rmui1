var ForumAddAnswerBox = React.createClass ({

	render: function() {
		return (
			<div>
				<textarea  id="addAnswers" className="col-md-6 co-xs-8"></textarea>
				&nbsp;
				<input type="button" className="btn btn-primary" value="Add"/>
			</div>
		)
	}
});