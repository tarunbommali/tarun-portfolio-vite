import { skillsList } from "../utils/skillsData";
import { FaStar } from "react-icons/fa";
 import { Component } from "react";

const SKILL_ROUTE_BG_URL = ""

export default class Skills extends Component {
  state = { activeTopic: "React" };

  onClickSkillItem = (topic) => {
    this.setState({ activeTopic: topic });
  };

  renderSkillsList() {
    return (
      <ul className="flex flex-wrap bg-white m-5 p-5 rounded-md">
        {skillsList.map(({ id, technology, icon, rating }) => (
          <button
            className=""
            onClick={() => this.onClickSkillItem(technology)}
            key={id}
          >
            <li className="flex flex-col m-5 bg-[#f3f3f3] px-5 py-2 rounded-md">
              <div className="flex ">
                {icon}
                <div className="flex justify-start items-start flex-col pl-3">
                  <p className="skill-title">{technology}</p>
                  <p className="flex">
                    {Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <FaStar
                          key={index}
                          className={
                            index < rating ? "text-zinc-500" : "text-zinc-800"
                          }
                        />
                      ))}
                  </p>
                </div>
              </div>
            </li>
          </button>
        ))}
      </ul>
    );
  }

  renderSkillItemConcepts() {
    const { activeTopic } = this.state;
    return (
      <div className="flex-wrap bg-white m-5 p-5 rounded-md hidden md:flex">
        {skillsList
          .filter(({ technology }) => technology === activeTopic)
          .map(({ id, technology, keyTopics }) => (
            <div key={id}>
              <h3 className="flex font-bold m-2 text-2xl">{technology}</h3>
              <ul className="flex flex-wrap">
                {Object.keys(keyTopics).map((topic, index) => (
                  <li className="flex mx-3 w-[220px] py-2" key={index}>
                   <h1 className="md:text-lg "> {topic}</h1>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    );
  }

  render() {
    return (
      <>
        <div
          className="flex justify-center bg-[#f4f2ee] bg-cover"
          style={{
            backgroundImage: `url(${SKILL_ROUTE_BG_URL})`,
            backgroundSize: 'cover', // Ensures the background image covers the entire container
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Prevent the image from repeating
            backgroundAttachment: 'fixed', 
            
          }}
        >
          <div className="w-[80%]">
            {this.renderSkillsList()}
            {this.renderSkillItemConcepts()}
          </div>
        </div>
      </>
    );
  }
}
