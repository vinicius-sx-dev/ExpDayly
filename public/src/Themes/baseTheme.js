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
  },
  iconButton:{
    width: width * 0.2,
    height: height * 0.1,
    backgroundColor:'#9e9e9e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    padding: 5,
    elevation: 3,
    alignSelf: 'center',
    marginVertical: 10
  },
  icon:{
    width: '80%',
    height: '80%',
    paddingHorizontal: 20
  },
  genreCard: {
    padding: 2,
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreCard: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
  },

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
  },
  icon:{
    ...base.icon
  },
  iconButton:{
    ...base.iconButton
  },
  genresContainer:{
    ...base.genresContainer
  },
  genreCard: {
    ...base.genreCard
  },
  
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
  },
  icon:{
    ...base.icon
  },
  iconButton:{
    ...base.iconButton
  },
  genreCard: {
    ...base.genreCard
  },
  genresContainer:{
    ...base.genresContainer
  },
  
})