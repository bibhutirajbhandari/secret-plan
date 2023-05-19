import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        toCSV(scrape());
    }

    public static void toCSV(List<List<String>> data) {

        String filePath = "/Users/bibhutirajbhandari/Documents/secret plan/scraper/web-scraper/src/TRYOUT.csv";
        try (
                BufferedWriter writer = new BufferedWriter(new FileWriter(filePath))) {
            for (List<String> row : data) {
                StringBuilder line = new StringBuilder();
                for (String element : row) {
                    line.append(element).append(",");
                }
                line.deleteCharAt(line.length() - 1); // Remove the trailing comma
                writer.write(line.toString());
                writer.newLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static List<List<String>> scrape() {
        List<List<String>> output = new ArrayList<>();
        try {
            String filePath = "/Users/bibhutirajbhandari/Documents/secret plan/scraper/web-scraper/src/data.html";
            // Connect to the website and retrieve the HTML
            Document doc = Jsoup.parse(new File(filePath));

            // Iterate over the selected elements and extract the desired information
            Elements links = doc.select("a.card-top-header");
            int oddCount = 0;
            for (Element link : links) {
                oddCount++;
                if (oddCount % 2 == 0) continue;
                String title = link.text();
                String hyperlink = link.attr("href");
                hyperlink = "https://www.gartner.com/" + hyperlink;
                System.out.println(title);
                List<String> row_data = new ArrayList<>();
                row_data.add(title);
                row_data.add(hyperlink);
                output.add(row_data);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return output;
    }

    public static void scrapeTopicList() {
        String url = "https://www.gartner.com/reviews/markets"; // Replace with the URL of the website you want to scrape
        try {
            // Fetch the HTML content of the website
            Document doc = Jsoup.connect(url).get();

            // Extract and print the titles and hyperlinks
            Elements links = doc.select("a");
            for (Element link : links) {
                String title = link.text();
                String hyperlink = link.attr("href");
                System.out.println("Title: " + title);
                System.out.println("https://www.gartner.com/" + hyperlink);
                System.out.println();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

