import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const base = {
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    height: 0.08*height,
    elevation: 1,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10
  },
  centerText:{
    textAlign: 'center',
    marginVertical: 10
  },
  backgroundImage:{
    width: width,
    height: height,
    position: 'absolute',
  },
  reports:{
    display: 'flex',
    justifyContent: 'center',
    gap: height * 0.05
  },
  graphicText:{
    fontSize: 10,
    marginRight: 10
  }

};

export const lightTheme = StyleSheet.create({
  container: {
    ...base.container,
    backgroundColor: '#F5F7FA',
  },
  card: {
    ...base.card,
    backgroundColor: '#FFFFFF',
    borderColor: '#E1E4E8',
  },
  title: {
    ...base.title,
    color: '#111827',
  },
  text: {
    ...base.text,
    color: '#4B5563',
  },
  button: {
    ...base.button,
    backgroundColor: '#2563EB',
  },
  buttonText: {
    ...base.buttonText,
    color: '#FFFFFF',
  },
  input: {
    ...base.input,
  },
  centerText:{
    ...base.centerText
  },
  backgroundImage:{
    ...base.backgroundImage
  },
  reports: {
    ...base.reports
  },
  graphicText: {
    ...base.graphicText
  }
});

export const darkTheme = StyleSheet.create({
  container: {
    ...base.container,
    backgroundColor: '#121212',
  },
  card: {
    ...base.card,
    backgroundColor: '#1E1E1E',
    borderColor: '#2E2E2E',
  },
  title: {
    ...base.title,
    color: '#F9FAFB',
  },
  text: {
    ...base.text,
    color: '#D1D5DB',
  },
  button: {
    ...base.button,
    backgroundColor: '#3B82F6',
  },
  buttonText: {
    ...base.buttonText,
    color: '#FFFFFF',
  },
  input: {
    ...base.input,
  },
  centerText:{
    ...base.centerText
  },
  backgroundImage:{
    ...base.backgroundImage
  },
  reports: {
    ...base.reports
  },
  graphicText: {
    ...base.graphicText
  }
})