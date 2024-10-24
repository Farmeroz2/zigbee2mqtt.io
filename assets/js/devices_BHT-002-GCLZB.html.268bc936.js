"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[31632],{99884:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>s,data:()=>u});var o=i(24691);const a={},s=(0,i(89260).A)(a,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[7]||(t[7]=(0,o.Lk)("h1",{id:"moes-bht-002-gclzb",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#moes-bht-002-gclzb"},[(0,o.Lk)("span",null,"Moes BHT-002-GCLZB")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"BHT-002-GCLZB")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=Moes"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Moes")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Moes BHT series Thermostat")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"linkquality, lock (state), deadzone_temperature, max_temperature_limit, climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state, preset), sensor, program")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BHT-002-GCLZB.png",alt:"Moes BHT-002-GCLZB"})])],-1))])]),t[8]||(t[8]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Switch the thermostat off. Press and hold the temperature down button for +- 8 seconds to enable the pairing mode (display lights up and a WiFi-like icon is blinking). After successful interview turn the thermostat on again.</p><h3 id="stop-message-flooding" tabindex="-1"><a class="header-anchor" href="#stop-message-flooding"><span>Stop message flooding</span></a></h3><p>This unit has a bug that makes it send multiple messages when updating. To stop this from flooding your MQTT Queues, please add the following to your <code>configuration.yaml</code> file:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> thermostat</span>\n<span class="line">    <span class="token key atrule">debounce</span><span class="token punctuation">:</span> <span class="token number">1</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock"><span>Child lock (lock)</span></a></h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric"><span>Deadzone temperature (numeric)</span></a></h3><p>The delta between local_temperature and current_heating_setpoint to trigger Heat. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>.</p><h3 id="max-temperature-limit-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-limit-numeric"><span>Max temperature limit (numeric)</span></a></h3><p>Maximum temperature limit. Cuts the thermostat out regardless of air temperature if the external floor sensor exceeds this temperature. Only used by the thermostat when in AL sensor mode.. Value can be found in the published state on the <code>max_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>45</code>. The unit of this value is <code>°C</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>running_state</code>, <code>preset</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>45</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>hold</code>, <code>program</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>, <code>cool</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-30</code> and the maximum value is <code>30</code> with a step size of <code>0.1</code>.</li></ul><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum"><span>Sensor (enum)</span></a></h3><p>Select temperature sensor to use. Value can be found in the published state on the <code>sensor</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>IN</code>, <code>AL</code>, <code>OU</code>.</p><h3 id="program-composite" tabindex="-1"><a class="header-anchor" href="#program-composite"><span>Program (composite)</span></a></h3><p>Time of day and setpoint to use when in program mode. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;program&quot;: {&quot;weekdays_p1_hour&quot;: VALUE, &quot;weekdays_p1_minute&quot;: VALUE, &quot;weekdays_p1_temperature&quot;: VALUE, &quot;weekdays_p2_hour&quot;: VALUE, &quot;weekdays_p2_minute&quot;: VALUE, &quot;weekdays_p2_temperature&quot;: VALUE, &quot;weekdays_p3_hour&quot;: VALUE, &quot;weekdays_p3_minute&quot;: VALUE, &quot;weekdays_p3_temperature&quot;: VALUE, &quot;weekdays_p4_hour&quot;: VALUE, &quot;weekdays_p4_minute&quot;: VALUE, &quot;weekdays_p4_temperature&quot;: VALUE, &quot;saturday_p1_hour&quot;: VALUE, &quot;saturday_p1_minute&quot;: VALUE, &quot;saturday_p1_temperature&quot;: VALUE, &quot;saturday_p2_hour&quot;: VALUE, &quot;saturday_p2_minute&quot;: VALUE, &quot;saturday_p2_temperature&quot;: VALUE, &quot;saturday_p3_hour&quot;: VALUE, &quot;saturday_p3_minute&quot;: VALUE, &quot;saturday_p3_temperature&quot;: VALUE, &quot;saturday_p4_hour&quot;: VALUE, &quot;saturday_p4_minute&quot;: VALUE, &quot;saturday_p4_temperature&quot;: VALUE, &quot;sunday_p1_hour&quot;: VALUE, &quot;sunday_p1_minute&quot;: VALUE, &quot;sunday_p1_temperature&quot;: VALUE, &quot;sunday_p2_hour&quot;: VALUE, &quot;sunday_p2_minute&quot;: VALUE, &quot;sunday_p2_temperature&quot;: VALUE, &quot;sunday_p3_hour&quot;: VALUE, &quot;sunday_p3_minute&quot;: VALUE, &quot;sunday_p3_temperature&quot;: VALUE, &quot;sunday_p4_hour&quot;: VALUE, &quot;sunday_p4_minute&quot;: VALUE, &quot;sunday_p4_temperature&quot;: VALUE}}</code></p><ul><li><code>weekdays_p1_hour</code> (numeric) max value is 23, unit is h</li><li><code>weekdays_p1_minute</code> (numeric) max value is 59, unit is m</li><li><code>weekdays_p1_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>weekdays_p2_hour</code> (numeric) max value is 23, unit is h</li><li><code>weekdays_p2_minute</code> (numeric) max value is 59, unit is m</li><li><code>weekdays_p2_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>weekdays_p3_hour</code> (numeric) max value is 23, unit is h</li><li><code>weekdays_p3_minute</code> (numeric) max value is 59, unit is m</li><li><code>weekdays_p3_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>weekdays_p4_hour</code> (numeric) max value is 23, unit is h</li><li><code>weekdays_p4_minute</code> (numeric) max value is 59, unit is m</li><li><code>weekdays_p4_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>saturday_p1_hour</code> (numeric) max value is 23, unit is h</li><li><code>saturday_p1_minute</code> (numeric) max value is 59, unit is m</li><li><code>saturday_p1_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>saturday_p2_hour</code> (numeric) max value is 23, unit is h</li><li><code>saturday_p2_minute</code> (numeric) max value is 59, unit is m</li><li><code>saturday_p2_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>saturday_p3_hour</code> (numeric) max value is 23, unit is h</li><li><code>saturday_p3_minute</code> (numeric) max value is 59, unit is m</li><li><code>saturday_p3_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>saturday_p4_hour</code> (numeric) max value is 23, unit is h</li><li><code>saturday_p4_minute</code> (numeric) max value is 59, unit is m</li><li><code>saturday_p4_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>sunday_p1_hour</code> (numeric) max value is 23, unit is h</li><li><code>sunday_p1_minute</code> (numeric) max value is 59, unit is m</li><li><code>sunday_p1_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>sunday_p2_hour</code> (numeric) max value is 23, unit is h</li><li><code>sunday_p2_minute</code> (numeric) max value is 59, unit is m</li><li><code>sunday_p2_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>sunday_p3_hour</code> (numeric) max value is 23, unit is h</li><li><code>sunday_p3_minute</code> (numeric) max value is 59, unit is m</li><li><code>sunday_p3_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>sunday_p4_hour</code> (numeric) max value is 23, unit is h</li><li><code>sunday_p4_minute</code> (numeric) max value is 59, unit is m</li><li><code>sunday_p4_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li></ul>',23))])}]]),u=JSON.parse('{"path":"/devices/BHT-002-GCLZB.html","title":"Moes BHT-002-GCLZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes BHT-002-GCLZB control via MQTT","description":"Integrate your Moes BHT-002-GCLZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-09-30T20:52:56.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Stop message flooding","slug":"stop-message-flooding","link":"#stop-message-flooding","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Deadzone temperature (numeric)","slug":"deadzone-temperature-numeric","link":"#deadzone-temperature-numeric","children":[]},{"level":3,"title":"Max temperature limit (numeric)","slug":"max-temperature-limit-numeric","link":"#max-temperature-limit-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"Program (composite)","slug":"program-composite","link":"#program-composite","children":[]}]}],"git":{"updatedTime":1729800094000},"filePathRelative":"devices/BHT-002-GCLZB.md"}')}}]);