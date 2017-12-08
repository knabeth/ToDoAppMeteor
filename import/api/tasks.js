import {Mongo} from "meteor/mongo";
export const Tasksdb = new Mongo.Collection('tasks');
import React, { Component } from 'react';