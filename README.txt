##
## Airlock Digital App for Splunk v2.4
##

== Support ==
If you have any questions or comments please get in touch at support@airlockdigital.com
If you have any ideas for new dashboard views that you would like to see, please let us know!
https://www.airlockdigital.com

== Splunk Requirements ==
Splunk Add-on for Microsoft Windows https://splunkbase.splunk.com/app/742/
Splunk Add-on for SysIntrnals SysMon https://splunkbase.splunk.com/app/1914/
Splunk v6.4+ Required (Some dashboards within this application use post processing for searches)

== Installation ==
1) Install the Add-on in Splunk using the web interface, or by decompressing the application installer into the SplunkHome/Apps directory;
2) (optional) Ensure the Splunk Add-on for Microsoft Windows is installed and writing events to the 'wineventlog' index;
3) (optional) Ensure the Splunk Add-on for SysInternals SysMon is installed and writing events to the 'wineventlog' index.

== Operation ==
The application is divided into three sections. Each section provides dashbords that allow interaction with logs withn your environment. Additional operating instructions can be found at the bottom of each dashboard.

== Airlock Application Whitelisting ==
This section of the application contains dashboards that allow you to work with Airlock Application Whitelisting data.
Setup: The Airlock dashboards assume that the Airlock HTTP input has a sourcetype of airlock.

== Windows Security ==
This section of the application provides easy to use dashboards for visualising windows event logs.
These dashboards have been informed by operational security experience and information provided in the NSA whitepaper: 'Spotting the Adversary with Windows Event Log Monitoring.
The NSA Whitepaper can be obtained here: https://www.iad.gov/iad/library/reports/spotting-the-adversary-with-windows-event-log-monitoring.cfm
NOTE: These Windows dashboards were designed with the intent of never modifying windows event log data contained within your database. This is why some dashboards use extensive regex to parse events at search time.

== SysMon ==
This section of the application provides easy to use dashboards for visualising SysInternals SysMon logs.
SysInternals SysMon must be installed and configured on endpoints. Some dashboards require that image / driver / process access etc is configured. 'Posh-Sysmon' is a fantastic powershell framework designed to assist with the creation of SysMon XML configurations.

== Troubleshooting ==
No data displayed?
1) Please ensure the user account you are searching with has accessed to the desired indexes and these indexes are searchable by default for the user.
2) For Windows & SysMon logs, please ensure the data is being written to the index called 'wineventlog'. If the logs are being written to a different index, please remove the reference to 'index=wineventlog' in each dashboard query.
3) If you are sending data from Airlock, please ensure the sourcetype is set with a name of 'airlock'.

Failed to Load Source for Parallel-Coordinates Visualization
1) Please clear your browser cache which should resolve the issue after the Parallel-Coordinates upgrade;
2) Alternitavely test the plugin by loading the relevant dashboard in your browsers 'incognito' mode.

== Third Party Libraries ==
This App uses the following third party open source libraries which are embedded in this application:

Parallel-Coordinates
Copyright (c) 2012, Kai Chang
All rights reserved.
https://github.com/syntagmatic/parallel-coordinates

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* The name Kai Chang may not be used to endorse or promote products
  derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL MICHAEL BOSTOCK BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

D3 
Copyright 2010-2017 Mike Bostock
All rights reserved.
https://github.com/d3/d3

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the author nor the names of contributors may be used to
  endorse or promote products derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Underscore
http://underscorejs.org/
Copyright (c) 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative
Reporters & Editors

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.



