package com.coderbyte.easy.java.swapcase;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SwapCaseCustomTest {
  @Test
  public void exampleStringIsSwapCased() {
    final String input = "Example SEntEncE";
    final int length = 6;

    final String actualResult = SwapCaseCustom.swapCaseCustom(input, length);

    assertEquals("eXAMPLe SEntEncE", actualResult);
  }
}
