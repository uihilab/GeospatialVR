<p align="center"><img alt="GeospatialVR" title="GeospatialVR" src="images/logo.png" width="250"></p>

<h3 align="center">
  A Web-based Virtual Reality Framework for Collaborative Environmental Simulations
</h3>

<br>

## Table of Contents

- [Introduction](#introduction)
- [How To Use](#how-to-use)
- [Use Cases](#use-cases)
  - [Flood](#flood)
  - [Wildfire](#wildfire)
  - [Transportation](#transportation)
  - [Active Shooter](#active_shooter)
- [Supported Browsers](#supported-browsers)
- [Feedback](#feedback)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

This project introduces GeospatialVR, an open-source collaborative virtual reality framework to dynamically create 3D real-world environments that can be served on any web platform and accessed via desktop and mobile devices and virtual reality headsets. The framework can generate realistic simulations of desired locations entailing the terrain, elevation model, infrastructures, dynamic visualizations (e.g. water and fire simulation), and information layers (e.g. disaster damages and extent, sensor readings, occupancy, traffic, weather). These layers enable in-situ visualization of useful data to aid public, scientists, officials, and decision-makers in acquiring a bird’s eye view of the current, historical, or forecasted condition of a community. The framework incorporates multiuser support for remote virtual collaboration. GeospatialVR’s purpose is to augment cyberinfrastructures with geospatial components to constitute the next-generation of information systems and decision support systems powered by immersive technologies. Finally, case studies have been developed for flooding, wildfire, transportation, and active shooter response.

## How To Use

This repository provides a boilerplate to use GeospatialVR. Just download and run the "index.html".

To examine how the data is provided and visualizations are managed for the VR environment, check out [geospatialxr.js](script/geospatialxr.js)

As a brief summary of functionality:

- Load location on the map
```js
updateMapLocation(lat, lon, zoom) // default zoom is 16
```

Extend current map by loading more tiles
```html
extendMap(west, east, north, south) // for initial map, 1 tile is loaded per each direction
```

## Use Cases

### Q&A Mode

#### COVID-19 Case Study
An information dissemination chatbot for COVID-19 has been developed to demonstrate the presented framework’s usage and benefits due to the urgent demand as COVID-19 pandemic is progressing. According to web analytics service (SimilarWeb, 2020), the CDC website has received the highest number of visits (i.e. traffic) among websites that are served in English and that offer information and statistics on the spread of the COVID-19 infection. Thus, we have selected the [CDC’s official Frequently Asked Questions webpage](https://www.cdc.gov/coronavirus/2019-ncov/faq.html) as a source for the following use cases. On that page, there is a total of 119 questions spanning various topics ranging from COVID-19 basics to cleaning and disinfection as of June 20, 2020. Exactly all of these 119 Q&A items on the CDC page have successfully been extracted with a 100% precision and recall with Instant Expert's heuristic parsing algorithm.

- To test this example by yourself, navigate to [examples/faq/faq-model/cdc](examples/faq/faq-model/cdc) and run *index.html* on supported browsers.

Conversation Screen | List of Example Questions
:-------------------------:|:-------------------------:
![Screenshot 1](figures/screenshots/cdc-1.png)  |  ![Screenshot 2](figures/screenshots/cdc-2.png)

As a way to quantify how flexible the Instant Expert is in terms of accurately mapping question variations that share the same intent, a test set is generated. The test set contains the original FAQ question, answer, and one natural language question that expects the same answer with different phrasing. For objectivity, a third-party software (i.e. QuillBot), which is a machine learning-powered paraphraser and sentence restructurer, is utilized to produce high-variance natural language questions with a similar meaning to the original. Additionally, the test set also contains three questions that the CDC’s FAQ cannot and should not answer, taken from the US Federal Drug Administration’s (FDA) FAQ webpage. For measurements, a benchmark code has been written to experiment with a broad range of confidence threshold values with respect to the precision and recall values. Both the benchmark code and a complete test set can be found [examples/faq/_benchmark](examples/faq/_benchmark).

In order to quantify the model’s effectiveness, precision, recall, and f1-score metrics have been selected for this imbalanced classification problem with multiple classes as formulated below (Sokolova and Lapalme, 2009).

![Formulas](figures/formulas.png)

Precision, recall, and f1-score values for different confidence thresholds based on generated test data is shown below.

![Scores](figures/scores.png)

### Knowledge Engine Mode (External)

#### Microsoft Cognitive Services - Project Answer Search
We have developed an open-source example use case to use Expert Web Component to ask natural language questions to get factual responses using [the Project Answer Search by Microsoft Cognitive Services Lab](https://labs.cognitive.microsoft.com/en-us/project-answer-search).

- To test this example by yourself, navigate to [examples/engine/bing-bot/use-case](examples/engine/bing-bot/use-case) and run *index.html* on supported browsers.
  - It uses an engine that is hosted on Heroku for free, and it is subject to limitations.
  - The first time a question is asked, system might take few seconds to wake up Heroku. After that, the responses should be instantaneous.
  - It is only intended for demonstration purposes, and not advised and allowed for production use.
  
- To modify/host this example yourself, please follow the directions on [examples/engine/bing-bot/bot-source](examples/engine/bing-bot/bot-source)

Conversation Screen | List of Example Questions
:-------------------------:|:-------------------------:
![Screenshot 1](figures/screenshots/bing-1.png)  |  ![Screenshot 2](figures/screenshots/bing-2.png)

## Supported Browsers

The presented web component is supported by default in;

- Google Chrome
- Mozilla Firefox
- Opera
- Safari
- Microsoft Edge

The speech recognition is only supported in Google Chrome, Opera, and Microsoft Edge.

Sources: [Mozilla](https://developer.mozilla.org/en-US/docs/Web/Web_Components), [W3Counter](https://www.w3counter.com/globalstats.php), [Can I Use Speech Recognition](https://caniuse.com/#search=speech)

## Feedback

Feel free to send us feedback by filing an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

This project is developed by the University of Iowa Hydroinformatics Lab (UIHI Lab): [https://hydroinformatics.uiowa.edu/](https://hydroinformatics.uiowa.edu/).
