class FollowToggle  {
    constructor(el) {
        this.el = $(el);
        this.userId = this.el.data("userId");
        this.followState =  this.el.data("initialFollowState");
        this.render();
    }

    render(){
        if(this.followState === "unfollowed") {
          this.el.text("Follow!");
        } else {
          this.el.text("Unfollow!");
        }
    }

    handleClick(e){
        e.preventDefault();
    
        if (this.followState === "unfollowed") {
          $.ajax({
            method: "POST",
            url: `/users/${this.userId}/follow`,
            datatype: "JSON"
          });
          this.followState = "followed";
        } else {
          $.ajax({
            method: "DELETE",
            url: `/users/${this.userId}/follow`,
            datatype: "JSON"
          });
          this.followState = "unfollowed";
        }
        this.render();
    }

};


module.exports = FollowToggle;