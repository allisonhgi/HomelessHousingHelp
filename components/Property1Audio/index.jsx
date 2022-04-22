import React from "react";
import styled from "styled-components";


class Property1Audio extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <TutorialButtons className={`tutorial-buttons-3 ${className || ""}`}>
        <VolumeUp className="volume_up">
          <OverlapGroup className="overlap-group-1">
            <Vector className="vector-2" src="/img/vector@2x.png" />
          </OverlapGroup>
        </VolumeUp>
      </TutorialButtons>
    );
  }
}

const TutorialButtons = styled.div`
  height: 53px;
  margin-top: 136px;
  display: flex;
  padding: 6px 8px;
  align-items: flex-end;
  min-width: 56px;
  background-color: var(--summer-green);
  border-radius: 5px;
  box-shadow: 3px 3px 4px #00000026;

  &.tutorial-buttons-3.tutorial-buttons-4 {
    position: absolute;
    top: 351px;
    left: 44px;
    margin-top: unset;
  }

  &.tutorial-buttons-3.tutorial-buttons-5 {
    margin-left: 1px;
    margin-top: unset;
  }

  &.tutorial-buttons-3.tutorial-buttons-6 {
    margin-left: 1px;
    margin-top: unset;
  }

  &.tutorial-buttons-3.tutorial-buttons-8 {
    margin-top: 25px;
  }

  &.tutorial-buttons-3.tutorial-buttons-9 {
    margin-top: 25px;
  }

  &.tutorial-buttons-3.tutorial-buttons-10 {
    margin-top: 25px;
  }

  &.tutorial-buttons-3.tutorial-buttons-11 {
    margin-top: 25px;
  }

  &.tutorial-buttons-3.tutorial-buttons-12 {
    margin-top: 25px;
    margin-left: 44px;
  }

  &.tutorial-buttons-3.tutorial-buttons-13 {
    margin-top: 25px;
  }

  &.tutorial-buttons-3.tutorial-buttons-14 {
    margin-top: 25px;
  }

  &.tutorial-buttons-3.tutorial-buttons-15 {
    margin-bottom: 113px;
    margin-top: unset;
  }

  &.tutorial-buttons-3.tutorial-buttons-16 {
    margin-left: 1px;
    margin-top: unset;
  }
`;

const VolumeUp = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  padding: 4.6px 5px;
  align-items: flex-start;
`;

const OverlapGroup = styled.div`
  height: 29px;
  display: flex;
  padding: 13.1px 14.2px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 30px;
  background-image: url(/img/vector@2x.svg);
  background-size: 100% 100%;
`;

const Vector = styled.img`
  width: 1px;
  height: 1px;
`;

export default Property1Audio;
