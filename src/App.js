import { useContext } from "react";
import { Context } from "./Context";
import Badge from "./components/badge/Badge";

// HERE WE SEND ALL THE INFORMATION WE NEED RENDERED IN OUR BADGE COMPONENT
function App() {
  const { badgeData, handleFilter, filterTags, handleCloseButton } =
    useContext(Context);

  return (
    <div>
      <Badge.Header>
        {filterTags.length > 0 && (
          <Badge.CurrentTags>
            {filterTags.map((item, i) => (
              <Badge.DisplayedTags key={i}>
                {item}
                <Badge.CloseButton onClick={() => handleCloseButton(item)}>
                  X
                </Badge.CloseButton>
              </Badge.DisplayedTags>
            ))}
          </Badge.CurrentTags>
        )}
      </Badge.Header>
      {badgeData.map((item, i) => (
        <Badge key={i} item={item}>
          <Badge.Logo url={item.logo} />
          <Badge.Card>
            <Badge.TopCard>
              <span className="company">{item.company}</span>
              {item.new && <button className="tag">NEW!</button>}
              {item.featured && (
                <button className="tag featured">FEATURED</button>
              )}
            </Badge.TopCard>
            <Badge.Position className="position">
              {item.position}
            </Badge.Position>
            <Badge.Misc>
              <span className="misc">{item.postedAt}</span>
              <span className="misc">{item.contract}</span>
              <span className="misc">{item.location}</span>
            </Badge.Misc>
          </Badge.Card>
          <Badge.Tags>
            {item.role && (
              <button onClick={handleFilter} className="tag">
                {item.role}
              </button>
            )}
            {item.level && (
              <button onClick={handleFilter} className="tag">
                {item.level}
              </button>
            )}
            {item.languages.map((value, i) => (
              <button key={i} onClick={handleFilter} className="tag">
                {value}
              </button>
            ))}
            {item.tools.map((value, i) => (
              <button key={i} onClick={handleFilter} className="tag">
                {value}
              </button>
            ))}
          </Badge.Tags>
        </Badge>
      ))}
    </div>
  );
}

export default App;

// "id": 8,
// "company": "Insure",
// "logo": "./images/insure.svg",
// "new": false,
// "featured": false,
// "position": "Junior Frontend Developer",
// "role": "Frontend", "Backend", "Fullstack"
// "level": "Junior", "Midleweight", "Senior"
// "postedAt": "2w ago",
// "contract": "Full Time",
// "location": "USA Only",
// "languages": ["JavaScript", "CSS", "HTML", "Python", "Ruby"],
// "tools": ["Vue", "Sass", "React", Ruby, RoR, Django]
