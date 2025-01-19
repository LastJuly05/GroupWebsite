package lab9_map;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class MyWordCountApp {
	// public static final String fileName = "data/hamlet.txt";
	public static final String fileName = "data/fit.txt";
	// <word, its occurences>
	private Map<String, Integer> map = new HashMap<String, Integer>();
	// Load data from fileName into the above map (containing <word, its occurences>)
	// using the guide given in TestReadFile.java
	
	public void loadData() {
		 try (Scanner scanner = new Scanner(new File(fileName))) {
	            while (scanner.hasNext()) {
	                String word = scanner.next();
	                if (!map.containsKey(word)) {
	                    map.put(word, 1);
	                }else {
	                    map.put(word, map.getOrDefault(word, 0) + 1);
	                }
	            }
	        } catch (FileNotFoundException e) {
	            System.out.println("File not found: " + fileName);
	        }
	    }
//	// Returns the number of unique tokens in the file data/hamlet.txt or fit.txt
//// Returns the number of unique tokens in the file
	public int countUnique() {
	    return map.size();
	}

	// Prints the word counts without considering the order of tokens
	public void printWordCounts() {
	    map.forEach((word, count) -> System.out.println(word + " - " + count));
	}

	// Prints the word counts in alphabetical order
	public void printWordCountsAlphabet() {
	    map.entrySet().stream()
	        .sorted(Map.Entry.comparingByKey())
	        .forEach(entry -> System.out.println(entry.getKey() + " - " + entry.getValue()));
	}
}