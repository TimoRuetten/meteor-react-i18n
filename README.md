# React i18n

Simple wrapper for TAPi18n package for ReactJS

## Install

Add this package:

```
meteor add timoruetten:react-i18n	
```

This package uses the [TAPi18n](https://github.com/TAPevents/tap-i18n) package.


## Usage

```
	<I18n 
		i18nkey="hello_world"
	/>
```

This will return a reactive value for the key hello_world. Its simular to TAPi18n.__('hello_world')

You can also add the properties ```options``` & ```lang_key```.

Example:

```
	<I18n 
		i18nkey="hello_world"
		lang_key="en"
		options={{}}
	/>
```
