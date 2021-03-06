/*Copyright (c) 2015 Airbnb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { Animated } from 'react-native';

const AnimatedWithChildren = Object.getPrototypeOf(Animated.ValueXY);
if (__DEV__) {
  if (AnimatedWithChildren.name !== 'AnimatedWithChildren') {
    console.error(
      'AnimatedRegion could not obtain AnimatedWithChildren base class'
    );
  }
}
// const __Animated = Object.getPrototypeOf(AnimatedWithChildren);
// if (__Animated.name !== 'Animated') console.error('AnimatedRegion could not obtain Animated base class');

var _uniqueId = 1;

export default class AnimatedMapRegion extends AnimatedWithChildren {
  constructor(valueIn) {
    super();
    var value = valueIn || {
      // probably want to come up with better defaults
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    };
    this.latitude =
      value.latitude instanceof Animated.Value
        ? value.latitude
        : new Animated.Value(value.latitude);
    this.longitude =
      value.longitude instanceof Animated.Value
        ? value.longitude
        : new Animated.Value(value.longitude);
    this.latitudeDelta =
      value.latitudeDelta instanceof Animated.Value
        ? value.latitudeDelta
        : new Animated.Value(value.latitudeDelta);
    this.longitudeDelta =
      value.longitudeDelta instanceof Animated.Value
        ? value.longitudeDelta
        : new Animated.Value(value.longitudeDelta);
    this._regionListeners = {};
  }

  setValue(value) {
    this.latitude._value = value.latitude;
    this.longitude._value = value.longitude;
    this.latitudeDelta._value = value.latitudeDelta;
    this.longitudeDelta._value = value.longitudeDelta;
  }

  setOffset(offset) {
    this.latitude.setOffset(offset.latitude);
    this.longitude.setOffset(offset.longitude);
    this.latitudeDelta.setOffset(offset.latitudeDelta);
    this.longitudeDelta.setOffset(offset.longitudeDelta);
  }

  flattenOffset() {
    this.latitude.flattenOffset();
    this.longitude.flattenOffset();
    this.latitudeDelta.flattenOffset();
    this.longitudeDelta.flattenOffset();
  }

  __getValue() {
    return {
      latitude: this.latitude.__getValue(),
      longitude: this.longitude.__getValue(),
      latitudeDelta: this.latitudeDelta.__getValue(),
      longitudeDelta: this.longitudeDelta.__getValue(),
    };
  }

  __attach() {
    this.latitude.__addChild(this);
    this.longitude.__addChild(this);
    this.latitudeDelta.__addChild(this);
    this.longitudeDelta.__addChild(this);
  }

  __detach() {
    this.latitude.__removeChild(this);
    this.longitude.__removeChild(this);
    this.latitudeDelta.__removeChild(this);
    this.longitudeDelta.__removeChild(this);
  }

  stopAnimation(callback) {
    this.latitude.stopAnimation();
    this.longitude.stopAnimation();
    this.latitudeDelta.stopAnimation();
    this.longitudeDelta.stopAnimation();
    callback && callback(this.__getValue());
  }

  addListener(callback) {
    var id = String(_uniqueId++);
    var jointCallback = (/*{value}*/) => {
      callback(this.__getValue());
    };
    this._regionListeners[id] = {
      latitude: this.latitude.addListener(jointCallback),
      longitude: this.longitude.addListener(jointCallback),
      latitudeDelta: this.latitudeDelta.addListener(jointCallback),
      longitudeDelta: this.longitudeDelta.addListener(jointCallback),
    };
    return id;
  }

  removeListener(id) {
    this.latitude.removeListener(this._regionListeners[id].latitude);
    this.longitude.removeListener(this._regionListeners[id].longitude);
    this.latitudeDelta.removeListener(this._regionListeners[id].latitudeDelta);
    this.longitudeDelta.removeListener(
      this._regionListeners[id].longitudeDelta
    );
    delete this._regionListeners[id];
  }

  spring(config) {
    var animations = [];
    config.hasOwnProperty('latitude') &&
      animations.push(
        Animated.spring(this.latitude, {
          ...config,
          toValue: config.latitude,
        })
      );

    config.hasOwnProperty('longitude') &&
      animations.push(
        Animated.spring(this.longitude, {
          ...config,
          toValue: config.longitude,
        })
      );

    config.hasOwnProperty('latitudeDelta') &&
      animations.push(
        Animated.spring(this.latitudeDelta, {
          ...config,
          toValue: config.latitudeDelta,
        })
      );

    config.hasOwnProperty('longitudeDelta') &&
      animations.push(
        Animated.spring(this.longitudeDelta, {
          ...config,
          toValue: config.longitudeDelta,
        })
      );

    return Animated.parallel(animations);
  }

  timing(config) {
    var animations = [];
    config.hasOwnProperty('latitude') &&
      animations.push(
        Animated.timing(this.latitude, {
          ...config,
          toValue: config.latitude,
        })
      );

    config.hasOwnProperty('longitude') &&
      animations.push(
        Animated.timing(this.longitude, {
          ...config,
          toValue: config.longitude,
        })
      );

    config.hasOwnProperty('latitudeDelta') &&
      animations.push(
        Animated.timing(this.latitudeDelta, {
          ...config,
          toValue: config.latitudeDelta,
        })
      );

    config.hasOwnProperty('longitudeDelta') &&
      animations.push(
        Animated.timing(this.longitudeDelta, {
          ...config,
          toValue: config.longitudeDelta,
        })
      );

    return Animated.parallel(animations);
  }
}
