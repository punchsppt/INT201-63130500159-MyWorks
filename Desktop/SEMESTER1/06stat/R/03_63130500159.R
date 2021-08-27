# Install Package
install.packages("DescTools")

# Sample datasets
sample1 <- c(29,49,42,43,32,38,37,41,27,27,30)
sample2 <- c(1,2,3,5,10,500)
sample3 <- c("Male","Female","Male","Female","Female")

### Cross Tabulation and Table Creation
table(sample1)


# Loading/Attaching and Listing of Packages
library(DescTools)

# Read description
help(package = DescTools)
Mode(sample1)


factor(sample3)

# treats gender as a nominal variable
gender <- factor(sample3)
summary(gender)

data()

head()      # See 6 observation (rows)
str()       # Structure of object
colnames()  # Column Name
rownames()  # Row Name
colMeans()  # Mean each column
rowMeans()  # Mean each row
colSums()   # Sum each column
rowSums()   # Sum each row


View(mtcars)
str(mtcars)
head(mtcars)
summary(mtcars)
colMeans(mtcars)

# Find mean of miles per gallon (mpg)
mean(mtcars$mpg)  # 20.09062

#Self Study
mtcars[1,]                  # Select first row with all column
mtcars[,1]                  # Select all row with only first column
mtcars["Datsun 710","wt"]   # Select by specific row and column
mtcars[1:5,]                # Select row 1-5 with all column


#Explore daatasets from CSV
Hotels <- read.csv("https://raw.githubusercontent.com/safesit23/INT214-Statistics/main/datasets/Hotels.csv")
View(Hotels)

# How many observation ? (จำนวนข้อมูล)

# What is the mean hotel room rate ?

# What is the median hotel room rate ?
median(Hotels$RateperNight)

# What is the mode ?
table(Hotels)
Mode(Hotels$RateperNight) # Mode ต้องตัวใหญ่เสมอ


