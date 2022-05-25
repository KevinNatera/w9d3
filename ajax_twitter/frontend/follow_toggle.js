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

};


module.exports = FollowToggle;