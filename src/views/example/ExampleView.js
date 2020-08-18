import React, { Component } from "react";
import WelcomeReact from '../../ExampleComponents/WelcomeReact';
import Namdaik from '../../ExampleComponents/Namdaik';
import StateSample from '../../ExampleComponents/StateSample';
import ValidatingProps from '../../ExampleComponents/ValidatingProps';
import ComponentApi from '../../ExampleComponents/ComponentApi';
import LifeCycle from '../../ExampleComponents/LifeCycle';
import ExampleEvents from '../../ExampleComponents/ExampleEvents';
import ExampleForm from '../../ExampleComponents/ExampleForm';
import ExampleList from '../../ExampleComponents/ExampleList';
import LiftingStateUp from '../../ExampleComponents/LiftingStateUp';
import ExampleRefs from '../../ExampleComponents/ExampleRefs';
import ExampleContext from '../../ExampleComponents/ExampleContext';
import ExampleContext2 from '../../ExampleComponents/ExampleContext2';
import RenderPropsListGirlFriends from '../../ExampleComponents/RenderPropsListGirlFriends';
import RenderPropsCounter from '../../ExampleComponents/RenderPropsCounter';
import HigherOder from '../../ExampleComponents/HigherOder';
import HookUseState from '../../ExampleComponents/HookUseState';
import AxiosListUser from '../../ExampleComponents/AxiosListUser';
import ClockDisplay from '../../ExampleComponents/ClockDisplay';

export default function ExmpleView() {
    return (
        <>
        <WelcomeReact />
        <Namdaik name="Nam"/>
        <StateSample />
        <ValidatingProps />
        <ComponentApi />
        <LifeCycle />
        <ExampleEvents />
        <ExampleForm />
        <ExampleList />
        <LiftingStateUp />
        <ExampleRefs />
        <ExampleContext />
        <ExampleContext2 />
        <RenderPropsListGirlFriends />
        <RenderPropsCounter />
        <HigherOder />
        <HookUseState />
        <AxiosListUser />
        <ClockDisplay />
      </>
    );
}
