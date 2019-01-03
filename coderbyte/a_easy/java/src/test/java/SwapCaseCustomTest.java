package com.coderbyte.easy.java.swapcase;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class SwapCaseCustomTest {
  @Test
  public void exampleStringIsSwapCased() {
    final String input = "Example SEntEncE";
    final int length = 6;

    final String actualResult = SwapCaseCustom.swapCase(input, length);

    assertEquals("eXAMPLe SEntEncE", actualResult);
  }
}
