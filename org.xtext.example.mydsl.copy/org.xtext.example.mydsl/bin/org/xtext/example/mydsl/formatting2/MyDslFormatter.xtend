/*
 * generated by Xtext 2.31.0
 */
package org.xtext.example.mydsl.formatting2

import com.google.inject.Inject
import org.eclipse.xtext.formatting2.AbstractFormatter2
import org.eclipse.xtext.formatting2.IFormattableDocument
import org.xtext.example.mydsl.services.MyDslGrammarAccess
import roboML.Function
import roboML.RoboMLProgram

class MyDslFormatter extends AbstractFormatter2 {
	
	@Inject extension MyDslGrammarAccess

	def dispatch void format(RoboMLProgram roboMLProgram, extension IFormattableDocument document) {
		// TODO: format HiddenRegions around keywords, attributes, cross references, etc. 
		for (function : roboMLProgram.function) {
			function.format
		}
	}

	def dispatch void format(Function function, extension IFormattableDocument document) {
		// TODO: format HiddenRegions around keywords, attributes, cross references, etc. 
		for (statement : function.instruction) {
			statement.format
		}
		for (variable : function.variable) {
			variable.format
		}
	}
	
	// TODO: implement for Variable, Loop, Condition, ArithmeticExpression
}