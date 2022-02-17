import "./UserList.scss";

import { LoadingIndicator } from "components/atoms/loadingIndicator/LoadingIndicator";
import { LoadMore } from "components/atoms/loadMore/LoadMore";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const UserList = (props) => {
  const { users, loading, onRemove, onLoadMore } = props;

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <table className="user-table">
        <thead>
          <tr>
            <th width="15%"></th>
            <th width="30%">First Name</th>
            <th width="30%">Last Name</th>
            <th width="15%">Age</th>
            <th width="10%"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <img src={user.picture.thumbnail} className="avatar" alt="" />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.dob.age}</td>
              <td>
                <Popup
                  trigger={<i className="fa-solid fa-circle-info"></i>}
                  modal
                >
                  {(close) => (
                    <div className="user-detail-container">
                      <img src={user.picture.large} alt="" />

                      <div class="user-information">
                        <div>
                          <strong>
                            {user.name.first + " " + user.name.last}
                          </strong>
                        </div>
                        <div>
                          <i className="fa-solid fa-user"></i>{" "}
                          {user.login.username}
                        </div>
                        <div>
                          <i className="fa-solid fa-mobile-screen-button"></i>
                          {user.cell}
                        </div>
                        <div>
                          <i className="fa-solid fa-location-pin"></i>{" "}
                          {user.location.country}
                        </div>
                        <div>
                          <i className="fa-solid fa-envelope"></i>
                          <a href={"mailto:" + user.email}>{user.email}</a>
                        </div>
                      </div>

                      <a className="close" onClick={close}>
                        <i className="fa-solid fa-circle-xmark"></i>
                      </a>
                    </div>
                  )}
                </Popup>

                <i
                  className="fa-solid fa-trash-can"
                  onClick={() => onRemove(user.id.value)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <LoadMore onClick={onLoadMore}>Load More</LoadMore>
    </>
  );
};
