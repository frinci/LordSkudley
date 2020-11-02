import React from 'react';
import { Component } from 'react';
import AHeader from '../nav/AHeader';
import '../styles/About.css';
import { base } from '../services/apiConfig';

import headshot from '../images/featured/Headshot.JPG';
import skudleyHeader from '../images/buttonsAndHeaders/LordSkudleyTitle.png';
import extraordinaire from '../images/buttonsAndHeaders/Extraordinaire.png';
import heathens from '../images/buttonsAndHeaders/Heathens.png';

class About extends Component {
  constructor() {
    super();
    this.state = {
      Cats: [],
    };
  }

  componentDidMount() {
    this.herdCats();
  }

  setCatData(Cats) {
    this.setState({ Cats });
  }

  herdCats() {
    let catData = [];
    // setting our 'this' to a variable called 'that' is a super-old
    // js thing that used to happen a lot. you don't really see it much anymore
    // but its important to know that you CAN save the value of 'this' if you
    // need to use it in a different context.... (see below ~ line 51)
    const that = this;
    base('LordSkudleyData')
      // we can probably add some props of some kind here to only get the Data
      // we need, right? looks like we're just getting everything from the DB.
      .select({
        view: 'Grid view',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function(record) {
            catData.push({
              image: record.get('Attachments')[0],
              Category: record.get('Category'),
            });
          });
          fetchNextPage();
        },
        function done(err) {
          // .... like here. if we try to just do this.setState here, we get
          // errs, because we are in a different JS context, so 'this' is different.
          // modern react has a thing called hooks that get around this, but if
          // we use our 'that' variable from before, we can use setState here.
          that.setState({
            Cats: catData,
          });
          if (err) {
            console.error(err);
            return;
          }
        },
      );

    // vvvv this code was running immediately, because it wasn't waiting for the above
    // code to resolve. so trying to set state here won't work. we need to call it in the
    // 'done' function above.
    // this.setState({
    //   Cats: catData,
    // });

  }

  render() {
    const { Cats } = this.state;
    console.log('CAT STATE', Cats);
    // notice: we now have cats in component state.
    const catPics = Cats && [...Cats].filter(Cat => Cat.Category === 'Cats');
    console.log(catPics);

    return (
      <div>
        <AHeader />

        <div className="skudleyBox">
          <img
            src={headshot}
            className="skudley"
            alt="Lord Skudley, himself, with his signature handlebar mustache, wearing top hat and steampunk goggles"
          />

          <div className="aboutBox">
            <img
              src={skudleyHeader}
              className="skudleyHeader"
              alt="Lord Skudley, Edward French"
            />

            <div>
              <img
                src={extraordinaire}
                className="artistTitle"
                alt="Artist, Writer, Prop Master, and Gamer Extraordinaire"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
            </div>
          </div>
        </div>

        <div className="colorBox"></div>

        <div className="catBox">
          <img src={heathens} className="catTitle" alt="The Heathens" />

          <div className="catCard">
            {catPics.map(cat => (
              <div>
                <img className="picGrid" src={cat.image.url} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
