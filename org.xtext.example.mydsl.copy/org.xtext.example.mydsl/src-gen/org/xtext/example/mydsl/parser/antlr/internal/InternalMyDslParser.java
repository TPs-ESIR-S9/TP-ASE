package org.xtext.example.mydsl.parser.antlr.internal;

import org.eclipse.xtext.*;
import org.eclipse.xtext.parser.*;
import org.eclipse.xtext.parser.impl.*;
import org.eclipse.emf.ecore.util.EcoreUtil;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.common.util.Enumerator;
import org.eclipse.xtext.parser.antlr.AbstractInternalAntlrParser;
import org.eclipse.xtext.parser.antlr.XtextTokenStream;
import org.eclipse.xtext.parser.antlr.XtextTokenStream.HiddenTokens;
import org.eclipse.xtext.parser.antlr.AntlrDatatypeRuleToken;
import org.xtext.example.mydsl.services.MyDslGrammarAccess;



import org.antlr.runtime.*;
import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

@SuppressWarnings("all")
public class InternalMyDslParser extends AbstractInternalAntlrParser {
    public static final String[] tokenNames = new String[] {
        "<invalid>", "<EOR>", "<DOWN>", "<UP>", "RULE_STRING", "RULE_ID", "RULE_INT", "RULE_ML_COMMENT", "RULE_SL_COMMENT", "RULE_WS", "RULE_ANY_OTHER", "'RoboMLProgram'", "'{'", "'function'", "','", "'}'", "'Function'", "'newAttribute'", "'returnType'", "'instruction'", "'variable'", "'Variable'", "'variableName'", "'variableValue'", "'variableref'", "'Deplacement'", "'movementType'", "'unit'", "'deplacementDistance'", "'Rotation'", "'rotationAngle'", "'rotationSens'", "'Loop'", "'booleanExpression'", "'Assignement'", "'assignableVariable'", "'entity'", "'SetValue'", "'entityToSet'", "'Condition'", "'statementIf'", "'statementElse'", "'Entity'", "'entityType'", "'FunctionCall'", "'ArithmeticExpression'", "'arithmeticOperator'", "'elementA'", "'elementB'", "'GetValue'", "'VariableRef'", "'RMLInt'", "'RMLString'", "'RMLFloat'", "'RMLDouble'", "'RMLBoolean'", "'forward'", "'backward'", "'sideLeft'", "'sideRight'", "'m'", "'dm'", "'cm'", "'mm'", "'Plus'", "'Minus'", "'Multiplie'", "'Divide'", "'Modulo'", "'Power'"
    };
    public static final int T__50=50;
    public static final int T__19=19;
    public static final int T__15=15;
    public static final int T__59=59;
    public static final int T__16=16;
    public static final int T__17=17;
    public static final int T__18=18;
    public static final int T__11=11;
    public static final int T__55=55;
    public static final int T__12=12;
    public static final int T__56=56;
    public static final int T__13=13;
    public static final int T__57=57;
    public static final int T__14=14;
    public static final int T__58=58;
    public static final int T__51=51;
    public static final int T__52=52;
    public static final int T__53=53;
    public static final int T__54=54;
    public static final int T__60=60;
    public static final int T__61=61;
    public static final int RULE_ID=5;
    public static final int T__26=26;
    public static final int T__27=27;
    public static final int T__28=28;
    public static final int RULE_INT=6;
    public static final int T__29=29;
    public static final int T__22=22;
    public static final int T__66=66;
    public static final int RULE_ML_COMMENT=7;
    public static final int T__23=23;
    public static final int T__67=67;
    public static final int T__24=24;
    public static final int T__68=68;
    public static final int T__25=25;
    public static final int T__69=69;
    public static final int T__62=62;
    public static final int T__63=63;
    public static final int T__20=20;
    public static final int T__64=64;
    public static final int T__21=21;
    public static final int T__65=65;
    public static final int RULE_STRING=4;
    public static final int RULE_SL_COMMENT=8;
    public static final int T__37=37;
    public static final int T__38=38;
    public static final int T__39=39;
    public static final int T__33=33;
    public static final int T__34=34;
    public static final int T__35=35;
    public static final int T__36=36;
    public static final int EOF=-1;
    public static final int T__30=30;
    public static final int T__31=31;
    public static final int T__32=32;
    public static final int RULE_WS=9;
    public static final int RULE_ANY_OTHER=10;
    public static final int T__48=48;
    public static final int T__49=49;
    public static final int T__44=44;
    public static final int T__45=45;
    public static final int T__46=46;
    public static final int T__47=47;
    public static final int T__40=40;
    public static final int T__41=41;
    public static final int T__42=42;
    public static final int T__43=43;

    // delegates
    // delegators


        public InternalMyDslParser(TokenStream input) {
            this(input, new RecognizerSharedState());
        }
        public InternalMyDslParser(TokenStream input, RecognizerSharedState state) {
            super(input, state);
             
        }
        

    public String[] getTokenNames() { return InternalMyDslParser.tokenNames; }
    public String getGrammarFileName() { return "InternalMyDsl.g"; }



     	private MyDslGrammarAccess grammarAccess;

        public InternalMyDslParser(TokenStream input, MyDslGrammarAccess grammarAccess) {
            this(input);
            this.grammarAccess = grammarAccess;
            registerRules(grammarAccess.getGrammar());
        }

        @Override
        protected String getFirstRuleName() {
        	return "RoboMLProgram";
       	}

       	@Override
       	protected MyDslGrammarAccess getGrammarAccess() {
       		return grammarAccess;
       	}




    // $ANTLR start "entryRuleRoboMLProgram"
    // InternalMyDsl.g:65:1: entryRuleRoboMLProgram returns [EObject current=null] : iv_ruleRoboMLProgram= ruleRoboMLProgram EOF ;
    public final EObject entryRuleRoboMLProgram() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleRoboMLProgram = null;


        try {
            // InternalMyDsl.g:65:54: (iv_ruleRoboMLProgram= ruleRoboMLProgram EOF )
            // InternalMyDsl.g:66:2: iv_ruleRoboMLProgram= ruleRoboMLProgram EOF
            {
             newCompositeNode(grammarAccess.getRoboMLProgramRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleRoboMLProgram=ruleRoboMLProgram();

            state._fsp--;

             current =iv_ruleRoboMLProgram; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleRoboMLProgram"


    // $ANTLR start "ruleRoboMLProgram"
    // InternalMyDsl.g:72:1: ruleRoboMLProgram returns [EObject current=null] : ( () otherlv_1= 'RoboMLProgram' otherlv_2= '{' (otherlv_3= 'function' otherlv_4= '{' ( (lv_function_5_0= ruleFunction ) ) (otherlv_6= ',' ( (lv_function_7_0= ruleFunction ) ) )* otherlv_8= '}' )? otherlv_9= '}' ) ;
    public final EObject ruleRoboMLProgram() throws RecognitionException {
        EObject current = null;

        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_3=null;
        Token otherlv_4=null;
        Token otherlv_6=null;
        Token otherlv_8=null;
        Token otherlv_9=null;
        EObject lv_function_5_0 = null;

        EObject lv_function_7_0 = null;



        	enterRule();

        try {
            // InternalMyDsl.g:78:2: ( ( () otherlv_1= 'RoboMLProgram' otherlv_2= '{' (otherlv_3= 'function' otherlv_4= '{' ( (lv_function_5_0= ruleFunction ) ) (otherlv_6= ',' ( (lv_function_7_0= ruleFunction ) ) )* otherlv_8= '}' )? otherlv_9= '}' ) )
            // InternalMyDsl.g:79:2: ( () otherlv_1= 'RoboMLProgram' otherlv_2= '{' (otherlv_3= 'function' otherlv_4= '{' ( (lv_function_5_0= ruleFunction ) ) (otherlv_6= ',' ( (lv_function_7_0= ruleFunction ) ) )* otherlv_8= '}' )? otherlv_9= '}' )
            {
            // InternalMyDsl.g:79:2: ( () otherlv_1= 'RoboMLProgram' otherlv_2= '{' (otherlv_3= 'function' otherlv_4= '{' ( (lv_function_5_0= ruleFunction ) ) (otherlv_6= ',' ( (lv_function_7_0= ruleFunction ) ) )* otherlv_8= '}' )? otherlv_9= '}' )
            // InternalMyDsl.g:80:3: () otherlv_1= 'RoboMLProgram' otherlv_2= '{' (otherlv_3= 'function' otherlv_4= '{' ( (lv_function_5_0= ruleFunction ) ) (otherlv_6= ',' ( (lv_function_7_0= ruleFunction ) ) )* otherlv_8= '}' )? otherlv_9= '}'
            {
            // InternalMyDsl.g:80:3: ()
            // InternalMyDsl.g:81:4: 
            {

            				current = forceCreateModelElement(
            					grammarAccess.getRoboMLProgramAccess().getRoboMLProgramAction_0(),
            					current);
            			

            }

            otherlv_1=(Token)match(input,11,FOLLOW_3); 

            			newLeafNode(otherlv_1, grammarAccess.getRoboMLProgramAccess().getRoboMLProgramKeyword_1());
            		
            otherlv_2=(Token)match(input,12,FOLLOW_4); 

            			newLeafNode(otherlv_2, grammarAccess.getRoboMLProgramAccess().getLeftCurlyBracketKeyword_2());
            		
            // InternalMyDsl.g:95:3: (otherlv_3= 'function' otherlv_4= '{' ( (lv_function_5_0= ruleFunction ) ) (otherlv_6= ',' ( (lv_function_7_0= ruleFunction ) ) )* otherlv_8= '}' )?
            int alt2=2;
            int LA2_0 = input.LA(1);

            if ( (LA2_0==13) ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // InternalMyDsl.g:96:4: otherlv_3= 'function' otherlv_4= '{' ( (lv_function_5_0= ruleFunction ) ) (otherlv_6= ',' ( (lv_function_7_0= ruleFunction ) ) )* otherlv_8= '}'
                    {
                    otherlv_3=(Token)match(input,13,FOLLOW_3); 

                    				newLeafNode(otherlv_3, grammarAccess.getRoboMLProgramAccess().getFunctionKeyword_3_0());
                    			
                    otherlv_4=(Token)match(input,12,FOLLOW_5); 

                    				newLeafNode(otherlv_4, grammarAccess.getRoboMLProgramAccess().getLeftCurlyBracketKeyword_3_1());
                    			
                    // InternalMyDsl.g:104:4: ( (lv_function_5_0= ruleFunction ) )
                    // InternalMyDsl.g:105:5: (lv_function_5_0= ruleFunction )
                    {
                    // InternalMyDsl.g:105:5: (lv_function_5_0= ruleFunction )
                    // InternalMyDsl.g:106:6: lv_function_5_0= ruleFunction
                    {

                    						newCompositeNode(grammarAccess.getRoboMLProgramAccess().getFunctionFunctionParserRuleCall_3_2_0());
                    					
                    pushFollow(FOLLOW_6);
                    lv_function_5_0=ruleFunction();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getRoboMLProgramRule());
                    						}
                    						add(
                    							current,
                    							"function",
                    							lv_function_5_0,
                    							"org.xtext.example.mydsl.MyDsl.Function");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }

                    // InternalMyDsl.g:123:4: (otherlv_6= ',' ( (lv_function_7_0= ruleFunction ) ) )*
                    loop1:
                    do {
                        int alt1=2;
                        int LA1_0 = input.LA(1);

                        if ( (LA1_0==14) ) {
                            alt1=1;
                        }


                        switch (alt1) {
                    	case 1 :
                    	    // InternalMyDsl.g:124:5: otherlv_6= ',' ( (lv_function_7_0= ruleFunction ) )
                    	    {
                    	    otherlv_6=(Token)match(input,14,FOLLOW_5); 

                    	    					newLeafNode(otherlv_6, grammarAccess.getRoboMLProgramAccess().getCommaKeyword_3_3_0());
                    	    				
                    	    // InternalMyDsl.g:128:5: ( (lv_function_7_0= ruleFunction ) )
                    	    // InternalMyDsl.g:129:6: (lv_function_7_0= ruleFunction )
                    	    {
                    	    // InternalMyDsl.g:129:6: (lv_function_7_0= ruleFunction )
                    	    // InternalMyDsl.g:130:7: lv_function_7_0= ruleFunction
                    	    {

                    	    							newCompositeNode(grammarAccess.getRoboMLProgramAccess().getFunctionFunctionParserRuleCall_3_3_1_0());
                    	    						
                    	    pushFollow(FOLLOW_6);
                    	    lv_function_7_0=ruleFunction();

                    	    state._fsp--;


                    	    							if (current==null) {
                    	    								current = createModelElementForParent(grammarAccess.getRoboMLProgramRule());
                    	    							}
                    	    							add(
                    	    								current,
                    	    								"function",
                    	    								lv_function_7_0,
                    	    								"org.xtext.example.mydsl.MyDsl.Function");
                    	    							afterParserOrEnumRuleCall();
                    	    						

                    	    }


                    	    }


                    	    }
                    	    break;

                    	default :
                    	    break loop1;
                        }
                    } while (true);

                    otherlv_8=(Token)match(input,15,FOLLOW_7); 

                    				newLeafNode(otherlv_8, grammarAccess.getRoboMLProgramAccess().getRightCurlyBracketKeyword_3_4());
                    			

                    }
                    break;

            }

            otherlv_9=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_9, grammarAccess.getRoboMLProgramAccess().getRightCurlyBracketKeyword_4());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleRoboMLProgram"


    // $ANTLR start "entryRuleStatement"
    // InternalMyDsl.g:161:1: entryRuleStatement returns [EObject current=null] : iv_ruleStatement= ruleStatement EOF ;
    public final EObject entryRuleStatement() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleStatement = null;


        try {
            // InternalMyDsl.g:161:50: (iv_ruleStatement= ruleStatement EOF )
            // InternalMyDsl.g:162:2: iv_ruleStatement= ruleStatement EOF
            {
             newCompositeNode(grammarAccess.getStatementRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleStatement=ruleStatement();

            state._fsp--;

             current =iv_ruleStatement; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleStatement"


    // $ANTLR start "ruleStatement"
    // InternalMyDsl.g:168:1: ruleStatement returns [EObject current=null] : (this_Deplacement_0= ruleDeplacement | this_Rotation_1= ruleRotation | this_Loop_2= ruleLoop | this_Assignement_3= ruleAssignement | this_SetValue_4= ruleSetValue | this_Condition_5= ruleCondition ) ;
    public final EObject ruleStatement() throws RecognitionException {
        EObject current = null;

        EObject this_Deplacement_0 = null;

        EObject this_Rotation_1 = null;

        EObject this_Loop_2 = null;

        EObject this_Assignement_3 = null;

        EObject this_SetValue_4 = null;

        EObject this_Condition_5 = null;



        	enterRule();

        try {
            // InternalMyDsl.g:174:2: ( (this_Deplacement_0= ruleDeplacement | this_Rotation_1= ruleRotation | this_Loop_2= ruleLoop | this_Assignement_3= ruleAssignement | this_SetValue_4= ruleSetValue | this_Condition_5= ruleCondition ) )
            // InternalMyDsl.g:175:2: (this_Deplacement_0= ruleDeplacement | this_Rotation_1= ruleRotation | this_Loop_2= ruleLoop | this_Assignement_3= ruleAssignement | this_SetValue_4= ruleSetValue | this_Condition_5= ruleCondition )
            {
            // InternalMyDsl.g:175:2: (this_Deplacement_0= ruleDeplacement | this_Rotation_1= ruleRotation | this_Loop_2= ruleLoop | this_Assignement_3= ruleAssignement | this_SetValue_4= ruleSetValue | this_Condition_5= ruleCondition )
            int alt3=6;
            switch ( input.LA(1) ) {
            case 25:
                {
                alt3=1;
                }
                break;
            case 29:
                {
                alt3=2;
                }
                break;
            case 32:
                {
                alt3=3;
                }
                break;
            case 34:
                {
                alt3=4;
                }
                break;
            case 37:
                {
                alt3=5;
                }
                break;
            case 39:
                {
                alt3=6;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 3, 0, input);

                throw nvae;
            }

            switch (alt3) {
                case 1 :
                    // InternalMyDsl.g:176:3: this_Deplacement_0= ruleDeplacement
                    {

                    			newCompositeNode(grammarAccess.getStatementAccess().getDeplacementParserRuleCall_0());
                    		
                    pushFollow(FOLLOW_2);
                    this_Deplacement_0=ruleDeplacement();

                    state._fsp--;


                    			current = this_Deplacement_0;
                    			afterParserOrEnumRuleCall();
                    		

                    }
                    break;
                case 2 :
                    // InternalMyDsl.g:185:3: this_Rotation_1= ruleRotation
                    {

                    			newCompositeNode(grammarAccess.getStatementAccess().getRotationParserRuleCall_1());
                    		
                    pushFollow(FOLLOW_2);
                    this_Rotation_1=ruleRotation();

                    state._fsp--;


                    			current = this_Rotation_1;
                    			afterParserOrEnumRuleCall();
                    		

                    }
                    break;
                case 3 :
                    // InternalMyDsl.g:194:3: this_Loop_2= ruleLoop
                    {

                    			newCompositeNode(grammarAccess.getStatementAccess().getLoopParserRuleCall_2());
                    		
                    pushFollow(FOLLOW_2);
                    this_Loop_2=ruleLoop();

                    state._fsp--;


                    			current = this_Loop_2;
                    			afterParserOrEnumRuleCall();
                    		

                    }
                    break;
                case 4 :
                    // InternalMyDsl.g:203:3: this_Assignement_3= ruleAssignement
                    {

                    			newCompositeNode(grammarAccess.getStatementAccess().getAssignementParserRuleCall_3());
                    		
                    pushFollow(FOLLOW_2);
                    this_Assignement_3=ruleAssignement();

                    state._fsp--;


                    			current = this_Assignement_3;
                    			afterParserOrEnumRuleCall();
                    		

                    }
                    break;
                case 5 :
                    // InternalMyDsl.g:212:3: this_SetValue_4= ruleSetValue
                    {

                    			newCompositeNode(grammarAccess.getStatementAccess().getSetValueParserRuleCall_4());
                    		
                    pushFollow(FOLLOW_2);
                    this_SetValue_4=ruleSetValue();

                    state._fsp--;


                    			current = this_SetValue_4;
                    			afterParserOrEnumRuleCall();
                    		

                    }
                    break;
                case 6 :
                    // InternalMyDsl.g:221:3: this_Condition_5= ruleCondition
                    {

                    			newCompositeNode(grammarAccess.getStatementAccess().getConditionParserRuleCall_5());
                    		
                    pushFollow(FOLLOW_2);
                    this_Condition_5=ruleCondition();

                    state._fsp--;


                    			current = this_Condition_5;
                    			afterParserOrEnumRuleCall();
                    		

                    }
                    break;

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleStatement"


    // $ANTLR start "entryRuleFunction"
    // InternalMyDsl.g:233:1: entryRuleFunction returns [EObject current=null] : iv_ruleFunction= ruleFunction EOF ;
    public final EObject entryRuleFunction() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleFunction = null;


        try {
            // InternalMyDsl.g:233:49: (iv_ruleFunction= ruleFunction EOF )
            // InternalMyDsl.g:234:2: iv_ruleFunction= ruleFunction EOF
            {
             newCompositeNode(grammarAccess.getFunctionRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleFunction=ruleFunction();

            state._fsp--;

             current =iv_ruleFunction; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleFunction"


    // $ANTLR start "ruleFunction"
    // InternalMyDsl.g:240:1: ruleFunction returns [EObject current=null] : ( () otherlv_1= 'Function' otherlv_2= '{' (otherlv_3= 'newAttribute' ( (lv_newAttribute_4_0= ruleRMLObject ) ) )? (otherlv_5= 'returnType' ( (lv_returnType_6_0= ruleRMLObject ) ) )? (otherlv_7= 'instruction' otherlv_8= '{' ( (lv_instruction_9_0= ruleStatement ) ) (otherlv_10= ',' ( (lv_instruction_11_0= ruleStatement ) ) )* otherlv_12= '}' )? (otherlv_13= 'variable' otherlv_14= '{' ( (lv_variable_15_0= ruleVariable ) ) (otherlv_16= ',' ( (lv_variable_17_0= ruleVariable ) ) )* otherlv_18= '}' )? otherlv_19= '}' ) ;
    public final EObject ruleFunction() throws RecognitionException {
        EObject current = null;

        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_3=null;
        Token otherlv_5=null;
        Token otherlv_7=null;
        Token otherlv_8=null;
        Token otherlv_10=null;
        Token otherlv_12=null;
        Token otherlv_13=null;
        Token otherlv_14=null;
        Token otherlv_16=null;
        Token otherlv_18=null;
        Token otherlv_19=null;
        Enumerator lv_newAttribute_4_0 = null;

        Enumerator lv_returnType_6_0 = null;

        EObject lv_instruction_9_0 = null;

        EObject lv_instruction_11_0 = null;

        EObject lv_variable_15_0 = null;

        EObject lv_variable_17_0 = null;



        	enterRule();

        try {
            // InternalMyDsl.g:246:2: ( ( () otherlv_1= 'Function' otherlv_2= '{' (otherlv_3= 'newAttribute' ( (lv_newAttribute_4_0= ruleRMLObject ) ) )? (otherlv_5= 'returnType' ( (lv_returnType_6_0= ruleRMLObject ) ) )? (otherlv_7= 'instruction' otherlv_8= '{' ( (lv_instruction_9_0= ruleStatement ) ) (otherlv_10= ',' ( (lv_instruction_11_0= ruleStatement ) ) )* otherlv_12= '}' )? (otherlv_13= 'variable' otherlv_14= '{' ( (lv_variable_15_0= ruleVariable ) ) (otherlv_16= ',' ( (lv_variable_17_0= ruleVariable ) ) )* otherlv_18= '}' )? otherlv_19= '}' ) )
            // InternalMyDsl.g:247:2: ( () otherlv_1= 'Function' otherlv_2= '{' (otherlv_3= 'newAttribute' ( (lv_newAttribute_4_0= ruleRMLObject ) ) )? (otherlv_5= 'returnType' ( (lv_returnType_6_0= ruleRMLObject ) ) )? (otherlv_7= 'instruction' otherlv_8= '{' ( (lv_instruction_9_0= ruleStatement ) ) (otherlv_10= ',' ( (lv_instruction_11_0= ruleStatement ) ) )* otherlv_12= '}' )? (otherlv_13= 'variable' otherlv_14= '{' ( (lv_variable_15_0= ruleVariable ) ) (otherlv_16= ',' ( (lv_variable_17_0= ruleVariable ) ) )* otherlv_18= '}' )? otherlv_19= '}' )
            {
            // InternalMyDsl.g:247:2: ( () otherlv_1= 'Function' otherlv_2= '{' (otherlv_3= 'newAttribute' ( (lv_newAttribute_4_0= ruleRMLObject ) ) )? (otherlv_5= 'returnType' ( (lv_returnType_6_0= ruleRMLObject ) ) )? (otherlv_7= 'instruction' otherlv_8= '{' ( (lv_instruction_9_0= ruleStatement ) ) (otherlv_10= ',' ( (lv_instruction_11_0= ruleStatement ) ) )* otherlv_12= '}' )? (otherlv_13= 'variable' otherlv_14= '{' ( (lv_variable_15_0= ruleVariable ) ) (otherlv_16= ',' ( (lv_variable_17_0= ruleVariable ) ) )* otherlv_18= '}' )? otherlv_19= '}' )
            // InternalMyDsl.g:248:3: () otherlv_1= 'Function' otherlv_2= '{' (otherlv_3= 'newAttribute' ( (lv_newAttribute_4_0= ruleRMLObject ) ) )? (otherlv_5= 'returnType' ( (lv_returnType_6_0= ruleRMLObject ) ) )? (otherlv_7= 'instruction' otherlv_8= '{' ( (lv_instruction_9_0= ruleStatement ) ) (otherlv_10= ',' ( (lv_instruction_11_0= ruleStatement ) ) )* otherlv_12= '}' )? (otherlv_13= 'variable' otherlv_14= '{' ( (lv_variable_15_0= ruleVariable ) ) (otherlv_16= ',' ( (lv_variable_17_0= ruleVariable ) ) )* otherlv_18= '}' )? otherlv_19= '}'
            {
            // InternalMyDsl.g:248:3: ()
            // InternalMyDsl.g:249:4: 
            {

            				current = forceCreateModelElement(
            					grammarAccess.getFunctionAccess().getFunctionAction_0(),
            					current);
            			

            }

            otherlv_1=(Token)match(input,16,FOLLOW_3); 

            			newLeafNode(otherlv_1, grammarAccess.getFunctionAccess().getFunctionKeyword_1());
            		
            otherlv_2=(Token)match(input,12,FOLLOW_8); 

            			newLeafNode(otherlv_2, grammarAccess.getFunctionAccess().getLeftCurlyBracketKeyword_2());
            		
            // InternalMyDsl.g:263:3: (otherlv_3= 'newAttribute' ( (lv_newAttribute_4_0= ruleRMLObject ) ) )?
            int alt4=2;
            int LA4_0 = input.LA(1);

            if ( (LA4_0==17) ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // InternalMyDsl.g:264:4: otherlv_3= 'newAttribute' ( (lv_newAttribute_4_0= ruleRMLObject ) )
                    {
                    otherlv_3=(Token)match(input,17,FOLLOW_9); 

                    				newLeafNode(otherlv_3, grammarAccess.getFunctionAccess().getNewAttributeKeyword_3_0());
                    			
                    // InternalMyDsl.g:268:4: ( (lv_newAttribute_4_0= ruleRMLObject ) )
                    // InternalMyDsl.g:269:5: (lv_newAttribute_4_0= ruleRMLObject )
                    {
                    // InternalMyDsl.g:269:5: (lv_newAttribute_4_0= ruleRMLObject )
                    // InternalMyDsl.g:270:6: lv_newAttribute_4_0= ruleRMLObject
                    {

                    						newCompositeNode(grammarAccess.getFunctionAccess().getNewAttributeRMLObjectEnumRuleCall_3_1_0());
                    					
                    pushFollow(FOLLOW_10);
                    lv_newAttribute_4_0=ruleRMLObject();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getFunctionRule());
                    						}
                    						set(
                    							current,
                    							"newAttribute",
                    							lv_newAttribute_4_0,
                    							"org.xtext.example.mydsl.MyDsl.RMLObject");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            // InternalMyDsl.g:288:3: (otherlv_5= 'returnType' ( (lv_returnType_6_0= ruleRMLObject ) ) )?
            int alt5=2;
            int LA5_0 = input.LA(1);

            if ( (LA5_0==18) ) {
                alt5=1;
            }
            switch (alt5) {
                case 1 :
                    // InternalMyDsl.g:289:4: otherlv_5= 'returnType' ( (lv_returnType_6_0= ruleRMLObject ) )
                    {
                    otherlv_5=(Token)match(input,18,FOLLOW_9); 

                    				newLeafNode(otherlv_5, grammarAccess.getFunctionAccess().getReturnTypeKeyword_4_0());
                    			
                    // InternalMyDsl.g:293:4: ( (lv_returnType_6_0= ruleRMLObject ) )
                    // InternalMyDsl.g:294:5: (lv_returnType_6_0= ruleRMLObject )
                    {
                    // InternalMyDsl.g:294:5: (lv_returnType_6_0= ruleRMLObject )
                    // InternalMyDsl.g:295:6: lv_returnType_6_0= ruleRMLObject
                    {

                    						newCompositeNode(grammarAccess.getFunctionAccess().getReturnTypeRMLObjectEnumRuleCall_4_1_0());
                    					
                    pushFollow(FOLLOW_11);
                    lv_returnType_6_0=ruleRMLObject();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getFunctionRule());
                    						}
                    						set(
                    							current,
                    							"returnType",
                    							lv_returnType_6_0,
                    							"org.xtext.example.mydsl.MyDsl.RMLObject");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            // InternalMyDsl.g:313:3: (otherlv_7= 'instruction' otherlv_8= '{' ( (lv_instruction_9_0= ruleStatement ) ) (otherlv_10= ',' ( (lv_instruction_11_0= ruleStatement ) ) )* otherlv_12= '}' )?
            int alt7=2;
            int LA7_0 = input.LA(1);

            if ( (LA7_0==19) ) {
                alt7=1;
            }
            switch (alt7) {
                case 1 :
                    // InternalMyDsl.g:314:4: otherlv_7= 'instruction' otherlv_8= '{' ( (lv_instruction_9_0= ruleStatement ) ) (otherlv_10= ',' ( (lv_instruction_11_0= ruleStatement ) ) )* otherlv_12= '}'
                    {
                    otherlv_7=(Token)match(input,19,FOLLOW_3); 

                    				newLeafNode(otherlv_7, grammarAccess.getFunctionAccess().getInstructionKeyword_5_0());
                    			
                    otherlv_8=(Token)match(input,12,FOLLOW_12); 

                    				newLeafNode(otherlv_8, grammarAccess.getFunctionAccess().getLeftCurlyBracketKeyword_5_1());
                    			
                    // InternalMyDsl.g:322:4: ( (lv_instruction_9_0= ruleStatement ) )
                    // InternalMyDsl.g:323:5: (lv_instruction_9_0= ruleStatement )
                    {
                    // InternalMyDsl.g:323:5: (lv_instruction_9_0= ruleStatement )
                    // InternalMyDsl.g:324:6: lv_instruction_9_0= ruleStatement
                    {

                    						newCompositeNode(grammarAccess.getFunctionAccess().getInstructionStatementParserRuleCall_5_2_0());
                    					
                    pushFollow(FOLLOW_6);
                    lv_instruction_9_0=ruleStatement();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getFunctionRule());
                    						}
                    						add(
                    							current,
                    							"instruction",
                    							lv_instruction_9_0,
                    							"org.xtext.example.mydsl.MyDsl.Statement");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }

                    // InternalMyDsl.g:341:4: (otherlv_10= ',' ( (lv_instruction_11_0= ruleStatement ) ) )*
                    loop6:
                    do {
                        int alt6=2;
                        int LA6_0 = input.LA(1);

                        if ( (LA6_0==14) ) {
                            alt6=1;
                        }


                        switch (alt6) {
                    	case 1 :
                    	    // InternalMyDsl.g:342:5: otherlv_10= ',' ( (lv_instruction_11_0= ruleStatement ) )
                    	    {
                    	    otherlv_10=(Token)match(input,14,FOLLOW_12); 

                    	    					newLeafNode(otherlv_10, grammarAccess.getFunctionAccess().getCommaKeyword_5_3_0());
                    	    				
                    	    // InternalMyDsl.g:346:5: ( (lv_instruction_11_0= ruleStatement ) )
                    	    // InternalMyDsl.g:347:6: (lv_instruction_11_0= ruleStatement )
                    	    {
                    	    // InternalMyDsl.g:347:6: (lv_instruction_11_0= ruleStatement )
                    	    // InternalMyDsl.g:348:7: lv_instruction_11_0= ruleStatement
                    	    {

                    	    							newCompositeNode(grammarAccess.getFunctionAccess().getInstructionStatementParserRuleCall_5_3_1_0());
                    	    						
                    	    pushFollow(FOLLOW_6);
                    	    lv_instruction_11_0=ruleStatement();

                    	    state._fsp--;


                    	    							if (current==null) {
                    	    								current = createModelElementForParent(grammarAccess.getFunctionRule());
                    	    							}
                    	    							add(
                    	    								current,
                    	    								"instruction",
                    	    								lv_instruction_11_0,
                    	    								"org.xtext.example.mydsl.MyDsl.Statement");
                    	    							afterParserOrEnumRuleCall();
                    	    						

                    	    }


                    	    }


                    	    }
                    	    break;

                    	default :
                    	    break loop6;
                        }
                    } while (true);

                    otherlv_12=(Token)match(input,15,FOLLOW_13); 

                    				newLeafNode(otherlv_12, grammarAccess.getFunctionAccess().getRightCurlyBracketKeyword_5_4());
                    			

                    }
                    break;

            }

            // InternalMyDsl.g:371:3: (otherlv_13= 'variable' otherlv_14= '{' ( (lv_variable_15_0= ruleVariable ) ) (otherlv_16= ',' ( (lv_variable_17_0= ruleVariable ) ) )* otherlv_18= '}' )?
            int alt9=2;
            int LA9_0 = input.LA(1);

            if ( (LA9_0==20) ) {
                alt9=1;
            }
            switch (alt9) {
                case 1 :
                    // InternalMyDsl.g:372:4: otherlv_13= 'variable' otherlv_14= '{' ( (lv_variable_15_0= ruleVariable ) ) (otherlv_16= ',' ( (lv_variable_17_0= ruleVariable ) ) )* otherlv_18= '}'
                    {
                    otherlv_13=(Token)match(input,20,FOLLOW_3); 

                    				newLeafNode(otherlv_13, grammarAccess.getFunctionAccess().getVariableKeyword_6_0());
                    			
                    otherlv_14=(Token)match(input,12,FOLLOW_14); 

                    				newLeafNode(otherlv_14, grammarAccess.getFunctionAccess().getLeftCurlyBracketKeyword_6_1());
                    			
                    // InternalMyDsl.g:380:4: ( (lv_variable_15_0= ruleVariable ) )
                    // InternalMyDsl.g:381:5: (lv_variable_15_0= ruleVariable )
                    {
                    // InternalMyDsl.g:381:5: (lv_variable_15_0= ruleVariable )
                    // InternalMyDsl.g:382:6: lv_variable_15_0= ruleVariable
                    {

                    						newCompositeNode(grammarAccess.getFunctionAccess().getVariableVariableParserRuleCall_6_2_0());
                    					
                    pushFollow(FOLLOW_6);
                    lv_variable_15_0=ruleVariable();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getFunctionRule());
                    						}
                    						add(
                    							current,
                    							"variable",
                    							lv_variable_15_0,
                    							"org.xtext.example.mydsl.MyDsl.Variable");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }

                    // InternalMyDsl.g:399:4: (otherlv_16= ',' ( (lv_variable_17_0= ruleVariable ) ) )*
                    loop8:
                    do {
                        int alt8=2;
                        int LA8_0 = input.LA(1);

                        if ( (LA8_0==14) ) {
                            alt8=1;
                        }


                        switch (alt8) {
                    	case 1 :
                    	    // InternalMyDsl.g:400:5: otherlv_16= ',' ( (lv_variable_17_0= ruleVariable ) )
                    	    {
                    	    otherlv_16=(Token)match(input,14,FOLLOW_14); 

                    	    					newLeafNode(otherlv_16, grammarAccess.getFunctionAccess().getCommaKeyword_6_3_0());
                    	    				
                    	    // InternalMyDsl.g:404:5: ( (lv_variable_17_0= ruleVariable ) )
                    	    // InternalMyDsl.g:405:6: (lv_variable_17_0= ruleVariable )
                    	    {
                    	    // InternalMyDsl.g:405:6: (lv_variable_17_0= ruleVariable )
                    	    // InternalMyDsl.g:406:7: lv_variable_17_0= ruleVariable
                    	    {

                    	    							newCompositeNode(grammarAccess.getFunctionAccess().getVariableVariableParserRuleCall_6_3_1_0());
                    	    						
                    	    pushFollow(FOLLOW_6);
                    	    lv_variable_17_0=ruleVariable();

                    	    state._fsp--;


                    	    							if (current==null) {
                    	    								current = createModelElementForParent(grammarAccess.getFunctionRule());
                    	    							}
                    	    							add(
                    	    								current,
                    	    								"variable",
                    	    								lv_variable_17_0,
                    	    								"org.xtext.example.mydsl.MyDsl.Variable");
                    	    							afterParserOrEnumRuleCall();
                    	    						

                    	    }


                    	    }


                    	    }
                    	    break;

                    	default :
                    	    break loop8;
                        }
                    } while (true);

                    otherlv_18=(Token)match(input,15,FOLLOW_7); 

                    				newLeafNode(otherlv_18, grammarAccess.getFunctionAccess().getRightCurlyBracketKeyword_6_4());
                    			

                    }
                    break;

            }

            otherlv_19=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_19, grammarAccess.getFunctionAccess().getRightCurlyBracketKeyword_7());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleFunction"


    // $ANTLR start "entryRuleVariable"
    // InternalMyDsl.g:437:1: entryRuleVariable returns [EObject current=null] : iv_ruleVariable= ruleVariable EOF ;
    public final EObject entryRuleVariable() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleVariable = null;


        try {
            // InternalMyDsl.g:437:49: (iv_ruleVariable= ruleVariable EOF )
            // InternalMyDsl.g:438:2: iv_ruleVariable= ruleVariable EOF
            {
             newCompositeNode(grammarAccess.getVariableRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleVariable=ruleVariable();

            state._fsp--;

             current =iv_ruleVariable; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleVariable"


    // $ANTLR start "ruleVariable"
    // InternalMyDsl.g:444:1: ruleVariable returns [EObject current=null] : ( () otherlv_1= 'Variable' otherlv_2= '{' (otherlv_3= 'variableName' ( (lv_variableName_4_0= ruleRMLObject ) ) )? (otherlv_5= 'variableValue' ( (lv_variableValue_6_0= ruleRMLObject ) ) )? (otherlv_7= 'variableref' otherlv_8= '{' ( (lv_variableref_9_0= ruleVariableRef ) ) (otherlv_10= ',' ( (lv_variableref_11_0= ruleVariableRef ) ) )* otherlv_12= '}' )? otherlv_13= '}' ) ;
    public final EObject ruleVariable() throws RecognitionException {
        EObject current = null;

        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_3=null;
        Token otherlv_5=null;
        Token otherlv_7=null;
        Token otherlv_8=null;
        Token otherlv_10=null;
        Token otherlv_12=null;
        Token otherlv_13=null;
        Enumerator lv_variableName_4_0 = null;

        Enumerator lv_variableValue_6_0 = null;

        EObject lv_variableref_9_0 = null;

        EObject lv_variableref_11_0 = null;



        	enterRule();

        try {
            // InternalMyDsl.g:450:2: ( ( () otherlv_1= 'Variable' otherlv_2= '{' (otherlv_3= 'variableName' ( (lv_variableName_4_0= ruleRMLObject ) ) )? (otherlv_5= 'variableValue' ( (lv_variableValue_6_0= ruleRMLObject ) ) )? (otherlv_7= 'variableref' otherlv_8= '{' ( (lv_variableref_9_0= ruleVariableRef ) ) (otherlv_10= ',' ( (lv_variableref_11_0= ruleVariableRef ) ) )* otherlv_12= '}' )? otherlv_13= '}' ) )
            // InternalMyDsl.g:451:2: ( () otherlv_1= 'Variable' otherlv_2= '{' (otherlv_3= 'variableName' ( (lv_variableName_4_0= ruleRMLObject ) ) )? (otherlv_5= 'variableValue' ( (lv_variableValue_6_0= ruleRMLObject ) ) )? (otherlv_7= 'variableref' otherlv_8= '{' ( (lv_variableref_9_0= ruleVariableRef ) ) (otherlv_10= ',' ( (lv_variableref_11_0= ruleVariableRef ) ) )* otherlv_12= '}' )? otherlv_13= '}' )
            {
            // InternalMyDsl.g:451:2: ( () otherlv_1= 'Variable' otherlv_2= '{' (otherlv_3= 'variableName' ( (lv_variableName_4_0= ruleRMLObject ) ) )? (otherlv_5= 'variableValue' ( (lv_variableValue_6_0= ruleRMLObject ) ) )? (otherlv_7= 'variableref' otherlv_8= '{' ( (lv_variableref_9_0= ruleVariableRef ) ) (otherlv_10= ',' ( (lv_variableref_11_0= ruleVariableRef ) ) )* otherlv_12= '}' )? otherlv_13= '}' )
            // InternalMyDsl.g:452:3: () otherlv_1= 'Variable' otherlv_2= '{' (otherlv_3= 'variableName' ( (lv_variableName_4_0= ruleRMLObject ) ) )? (otherlv_5= 'variableValue' ( (lv_variableValue_6_0= ruleRMLObject ) ) )? (otherlv_7= 'variableref' otherlv_8= '{' ( (lv_variableref_9_0= ruleVariableRef ) ) (otherlv_10= ',' ( (lv_variableref_11_0= ruleVariableRef ) ) )* otherlv_12= '}' )? otherlv_13= '}'
            {
            // InternalMyDsl.g:452:3: ()
            // InternalMyDsl.g:453:4: 
            {

            				current = forceCreateModelElement(
            					grammarAccess.getVariableAccess().getVariableAction_0(),
            					current);
            			

            }

            otherlv_1=(Token)match(input,21,FOLLOW_3); 

            			newLeafNode(otherlv_1, grammarAccess.getVariableAccess().getVariableKeyword_1());
            		
            otherlv_2=(Token)match(input,12,FOLLOW_15); 

            			newLeafNode(otherlv_2, grammarAccess.getVariableAccess().getLeftCurlyBracketKeyword_2());
            		
            // InternalMyDsl.g:467:3: (otherlv_3= 'variableName' ( (lv_variableName_4_0= ruleRMLObject ) ) )?
            int alt10=2;
            int LA10_0 = input.LA(1);

            if ( (LA10_0==22) ) {
                alt10=1;
            }
            switch (alt10) {
                case 1 :
                    // InternalMyDsl.g:468:4: otherlv_3= 'variableName' ( (lv_variableName_4_0= ruleRMLObject ) )
                    {
                    otherlv_3=(Token)match(input,22,FOLLOW_9); 

                    				newLeafNode(otherlv_3, grammarAccess.getVariableAccess().getVariableNameKeyword_3_0());
                    			
                    // InternalMyDsl.g:472:4: ( (lv_variableName_4_0= ruleRMLObject ) )
                    // InternalMyDsl.g:473:5: (lv_variableName_4_0= ruleRMLObject )
                    {
                    // InternalMyDsl.g:473:5: (lv_variableName_4_0= ruleRMLObject )
                    // InternalMyDsl.g:474:6: lv_variableName_4_0= ruleRMLObject
                    {

                    						newCompositeNode(grammarAccess.getVariableAccess().getVariableNameRMLObjectEnumRuleCall_3_1_0());
                    					
                    pushFollow(FOLLOW_16);
                    lv_variableName_4_0=ruleRMLObject();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getVariableRule());
                    						}
                    						set(
                    							current,
                    							"variableName",
                    							lv_variableName_4_0,
                    							"org.xtext.example.mydsl.MyDsl.RMLObject");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            // InternalMyDsl.g:492:3: (otherlv_5= 'variableValue' ( (lv_variableValue_6_0= ruleRMLObject ) ) )?
            int alt11=2;
            int LA11_0 = input.LA(1);

            if ( (LA11_0==23) ) {
                alt11=1;
            }
            switch (alt11) {
                case 1 :
                    // InternalMyDsl.g:493:4: otherlv_5= 'variableValue' ( (lv_variableValue_6_0= ruleRMLObject ) )
                    {
                    otherlv_5=(Token)match(input,23,FOLLOW_9); 

                    				newLeafNode(otherlv_5, grammarAccess.getVariableAccess().getVariableValueKeyword_4_0());
                    			
                    // InternalMyDsl.g:497:4: ( (lv_variableValue_6_0= ruleRMLObject ) )
                    // InternalMyDsl.g:498:5: (lv_variableValue_6_0= ruleRMLObject )
                    {
                    // InternalMyDsl.g:498:5: (lv_variableValue_6_0= ruleRMLObject )
                    // InternalMyDsl.g:499:6: lv_variableValue_6_0= ruleRMLObject
                    {

                    						newCompositeNode(grammarAccess.getVariableAccess().getVariableValueRMLObjectEnumRuleCall_4_1_0());
                    					
                    pushFollow(FOLLOW_17);
                    lv_variableValue_6_0=ruleRMLObject();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getVariableRule());
                    						}
                    						set(
                    							current,
                    							"variableValue",
                    							lv_variableValue_6_0,
                    							"org.xtext.example.mydsl.MyDsl.RMLObject");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            // InternalMyDsl.g:517:3: (otherlv_7= 'variableref' otherlv_8= '{' ( (lv_variableref_9_0= ruleVariableRef ) ) (otherlv_10= ',' ( (lv_variableref_11_0= ruleVariableRef ) ) )* otherlv_12= '}' )?
            int alt13=2;
            int LA13_0 = input.LA(1);

            if ( (LA13_0==24) ) {
                alt13=1;
            }
            switch (alt13) {
                case 1 :
                    // InternalMyDsl.g:518:4: otherlv_7= 'variableref' otherlv_8= '{' ( (lv_variableref_9_0= ruleVariableRef ) ) (otherlv_10= ',' ( (lv_variableref_11_0= ruleVariableRef ) ) )* otherlv_12= '}'
                    {
                    otherlv_7=(Token)match(input,24,FOLLOW_3); 

                    				newLeafNode(otherlv_7, grammarAccess.getVariableAccess().getVariablerefKeyword_5_0());
                    			
                    otherlv_8=(Token)match(input,12,FOLLOW_18); 

                    				newLeafNode(otherlv_8, grammarAccess.getVariableAccess().getLeftCurlyBracketKeyword_5_1());
                    			
                    // InternalMyDsl.g:526:4: ( (lv_variableref_9_0= ruleVariableRef ) )
                    // InternalMyDsl.g:527:5: (lv_variableref_9_0= ruleVariableRef )
                    {
                    // InternalMyDsl.g:527:5: (lv_variableref_9_0= ruleVariableRef )
                    // InternalMyDsl.g:528:6: lv_variableref_9_0= ruleVariableRef
                    {

                    						newCompositeNode(grammarAccess.getVariableAccess().getVariablerefVariableRefParserRuleCall_5_2_0());
                    					
                    pushFollow(FOLLOW_6);
                    lv_variableref_9_0=ruleVariableRef();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getVariableRule());
                    						}
                    						add(
                    							current,
                    							"variableref",
                    							lv_variableref_9_0,
                    							"org.xtext.example.mydsl.MyDsl.VariableRef");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }

                    // InternalMyDsl.g:545:4: (otherlv_10= ',' ( (lv_variableref_11_0= ruleVariableRef ) ) )*
                    loop12:
                    do {
                        int alt12=2;
                        int LA12_0 = input.LA(1);

                        if ( (LA12_0==14) ) {
                            alt12=1;
                        }


                        switch (alt12) {
                    	case 1 :
                    	    // InternalMyDsl.g:546:5: otherlv_10= ',' ( (lv_variableref_11_0= ruleVariableRef ) )
                    	    {
                    	    otherlv_10=(Token)match(input,14,FOLLOW_18); 

                    	    					newLeafNode(otherlv_10, grammarAccess.getVariableAccess().getCommaKeyword_5_3_0());
                    	    				
                    	    // InternalMyDsl.g:550:5: ( (lv_variableref_11_0= ruleVariableRef ) )
                    	    // InternalMyDsl.g:551:6: (lv_variableref_11_0= ruleVariableRef )
                    	    {
                    	    // InternalMyDsl.g:551:6: (lv_variableref_11_0= ruleVariableRef )
                    	    // InternalMyDsl.g:552:7: lv_variableref_11_0= ruleVariableRef
                    	    {

                    	    							newCompositeNode(grammarAccess.getVariableAccess().getVariablerefVariableRefParserRuleCall_5_3_1_0());
                    	    						
                    	    pushFollow(FOLLOW_6);
                    	    lv_variableref_11_0=ruleVariableRef();

                    	    state._fsp--;


                    	    							if (current==null) {
                    	    								current = createModelElementForParent(grammarAccess.getVariableRule());
                    	    							}
                    	    							add(
                    	    								current,
                    	    								"variableref",
                    	    								lv_variableref_11_0,
                    	    								"org.xtext.example.mydsl.MyDsl.VariableRef");
                    	    							afterParserOrEnumRuleCall();
                    	    						

                    	    }


                    	    }


                    	    }
                    	    break;

                    	default :
                    	    break loop12;
                        }
                    } while (true);

                    otherlv_12=(Token)match(input,15,FOLLOW_7); 

                    				newLeafNode(otherlv_12, grammarAccess.getVariableAccess().getRightCurlyBracketKeyword_5_4());
                    			

                    }
                    break;

            }

            otherlv_13=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_13, grammarAccess.getVariableAccess().getRightCurlyBracketKeyword_6());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleVariable"


    // $ANTLR start "entryRuleDeplacement"
    // InternalMyDsl.g:583:1: entryRuleDeplacement returns [EObject current=null] : iv_ruleDeplacement= ruleDeplacement EOF ;
    public final EObject entryRuleDeplacement() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleDeplacement = null;


        try {
            // InternalMyDsl.g:583:52: (iv_ruleDeplacement= ruleDeplacement EOF )
            // InternalMyDsl.g:584:2: iv_ruleDeplacement= ruleDeplacement EOF
            {
             newCompositeNode(grammarAccess.getDeplacementRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleDeplacement=ruleDeplacement();

            state._fsp--;

             current =iv_ruleDeplacement; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleDeplacement"


    // $ANTLR start "ruleDeplacement"
    // InternalMyDsl.g:590:1: ruleDeplacement returns [EObject current=null] : (otherlv_0= 'Deplacement' otherlv_1= '{' (otherlv_2= 'movementType' ( (lv_movementType_3_0= ruleDirection ) ) )? otherlv_4= 'unit' ( ( ruleEString ) ) (otherlv_6= 'deplacementDistance' ( ( ruleEString ) ) )? otherlv_8= '}' ) ;
    public final EObject ruleDeplacement() throws RecognitionException {
        EObject current = null;

        Token otherlv_0=null;
        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_4=null;
        Token otherlv_6=null;
        Token otherlv_8=null;
        Enumerator lv_movementType_3_0 = null;



        	enterRule();

        try {
            // InternalMyDsl.g:596:2: ( (otherlv_0= 'Deplacement' otherlv_1= '{' (otherlv_2= 'movementType' ( (lv_movementType_3_0= ruleDirection ) ) )? otherlv_4= 'unit' ( ( ruleEString ) ) (otherlv_6= 'deplacementDistance' ( ( ruleEString ) ) )? otherlv_8= '}' ) )
            // InternalMyDsl.g:597:2: (otherlv_0= 'Deplacement' otherlv_1= '{' (otherlv_2= 'movementType' ( (lv_movementType_3_0= ruleDirection ) ) )? otherlv_4= 'unit' ( ( ruleEString ) ) (otherlv_6= 'deplacementDistance' ( ( ruleEString ) ) )? otherlv_8= '}' )
            {
            // InternalMyDsl.g:597:2: (otherlv_0= 'Deplacement' otherlv_1= '{' (otherlv_2= 'movementType' ( (lv_movementType_3_0= ruleDirection ) ) )? otherlv_4= 'unit' ( ( ruleEString ) ) (otherlv_6= 'deplacementDistance' ( ( ruleEString ) ) )? otherlv_8= '}' )
            // InternalMyDsl.g:598:3: otherlv_0= 'Deplacement' otherlv_1= '{' (otherlv_2= 'movementType' ( (lv_movementType_3_0= ruleDirection ) ) )? otherlv_4= 'unit' ( ( ruleEString ) ) (otherlv_6= 'deplacementDistance' ( ( ruleEString ) ) )? otherlv_8= '}'
            {
            otherlv_0=(Token)match(input,25,FOLLOW_3); 

            			newLeafNode(otherlv_0, grammarAccess.getDeplacementAccess().getDeplacementKeyword_0());
            		
            otherlv_1=(Token)match(input,12,FOLLOW_19); 

            			newLeafNode(otherlv_1, grammarAccess.getDeplacementAccess().getLeftCurlyBracketKeyword_1());
            		
            // InternalMyDsl.g:606:3: (otherlv_2= 'movementType' ( (lv_movementType_3_0= ruleDirection ) ) )?
            int alt14=2;
            int LA14_0 = input.LA(1);

            if ( (LA14_0==26) ) {
                alt14=1;
            }
            switch (alt14) {
                case 1 :
                    // InternalMyDsl.g:607:4: otherlv_2= 'movementType' ( (lv_movementType_3_0= ruleDirection ) )
                    {
                    otherlv_2=(Token)match(input,26,FOLLOW_20); 

                    				newLeafNode(otherlv_2, grammarAccess.getDeplacementAccess().getMovementTypeKeyword_2_0());
                    			
                    // InternalMyDsl.g:611:4: ( (lv_movementType_3_0= ruleDirection ) )
                    // InternalMyDsl.g:612:5: (lv_movementType_3_0= ruleDirection )
                    {
                    // InternalMyDsl.g:612:5: (lv_movementType_3_0= ruleDirection )
                    // InternalMyDsl.g:613:6: lv_movementType_3_0= ruleDirection
                    {

                    						newCompositeNode(grammarAccess.getDeplacementAccess().getMovementTypeDirectionEnumRuleCall_2_1_0());
                    					
                    pushFollow(FOLLOW_21);
                    lv_movementType_3_0=ruleDirection();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getDeplacementRule());
                    						}
                    						set(
                    							current,
                    							"movementType",
                    							lv_movementType_3_0,
                    							"org.xtext.example.mydsl.MyDsl.Direction");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            otherlv_4=(Token)match(input,27,FOLLOW_22); 

            			newLeafNode(otherlv_4, grammarAccess.getDeplacementAccess().getUnitKeyword_3());
            		
            // InternalMyDsl.g:635:3: ( ( ruleEString ) )
            // InternalMyDsl.g:636:4: ( ruleEString )
            {
            // InternalMyDsl.g:636:4: ( ruleEString )
            // InternalMyDsl.g:637:5: ruleEString
            {

            					if (current==null) {
            						current = createModelElement(grammarAccess.getDeplacementRule());
            					}
            				

            					newCompositeNode(grammarAccess.getDeplacementAccess().getUnitUnitCrossReference_4_0());
            				
            pushFollow(FOLLOW_23);
            ruleEString();

            state._fsp--;


            					afterParserOrEnumRuleCall();
            				

            }


            }

            // InternalMyDsl.g:651:3: (otherlv_6= 'deplacementDistance' ( ( ruleEString ) ) )?
            int alt15=2;
            int LA15_0 = input.LA(1);

            if ( (LA15_0==28) ) {
                alt15=1;
            }
            switch (alt15) {
                case 1 :
                    // InternalMyDsl.g:652:4: otherlv_6= 'deplacementDistance' ( ( ruleEString ) )
                    {
                    otherlv_6=(Token)match(input,28,FOLLOW_22); 

                    				newLeafNode(otherlv_6, grammarAccess.getDeplacementAccess().getDeplacementDistanceKeyword_5_0());
                    			
                    // InternalMyDsl.g:656:4: ( ( ruleEString ) )
                    // InternalMyDsl.g:657:5: ( ruleEString )
                    {
                    // InternalMyDsl.g:657:5: ( ruleEString )
                    // InternalMyDsl.g:658:6: ruleEString
                    {

                    						if (current==null) {
                    							current = createModelElement(grammarAccess.getDeplacementRule());
                    						}
                    					

                    						newCompositeNode(grammarAccess.getDeplacementAccess().getDeplacementDistanceEntityCrossReference_5_1_0());
                    					
                    pushFollow(FOLLOW_7);
                    ruleEString();

                    state._fsp--;


                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            otherlv_8=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_8, grammarAccess.getDeplacementAccess().getRightCurlyBracketKeyword_6());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleDeplacement"


    // $ANTLR start "entryRuleRotation"
    // InternalMyDsl.g:681:1: entryRuleRotation returns [EObject current=null] : iv_ruleRotation= ruleRotation EOF ;
    public final EObject entryRuleRotation() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleRotation = null;


        try {
            // InternalMyDsl.g:681:49: (iv_ruleRotation= ruleRotation EOF )
            // InternalMyDsl.g:682:2: iv_ruleRotation= ruleRotation EOF
            {
             newCompositeNode(grammarAccess.getRotationRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleRotation=ruleRotation();

            state._fsp--;

             current =iv_ruleRotation; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleRotation"


    // $ANTLR start "ruleRotation"
    // InternalMyDsl.g:688:1: ruleRotation returns [EObject current=null] : (otherlv_0= 'Rotation' otherlv_1= '{' otherlv_2= 'rotationAngle' ( ( ruleEString ) ) otherlv_4= 'rotationSens' ( ( ruleEString ) ) otherlv_6= '}' ) ;
    public final EObject ruleRotation() throws RecognitionException {
        EObject current = null;

        Token otherlv_0=null;
        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_4=null;
        Token otherlv_6=null;


        	enterRule();

        try {
            // InternalMyDsl.g:694:2: ( (otherlv_0= 'Rotation' otherlv_1= '{' otherlv_2= 'rotationAngle' ( ( ruleEString ) ) otherlv_4= 'rotationSens' ( ( ruleEString ) ) otherlv_6= '}' ) )
            // InternalMyDsl.g:695:2: (otherlv_0= 'Rotation' otherlv_1= '{' otherlv_2= 'rotationAngle' ( ( ruleEString ) ) otherlv_4= 'rotationSens' ( ( ruleEString ) ) otherlv_6= '}' )
            {
            // InternalMyDsl.g:695:2: (otherlv_0= 'Rotation' otherlv_1= '{' otherlv_2= 'rotationAngle' ( ( ruleEString ) ) otherlv_4= 'rotationSens' ( ( ruleEString ) ) otherlv_6= '}' )
            // InternalMyDsl.g:696:3: otherlv_0= 'Rotation' otherlv_1= '{' otherlv_2= 'rotationAngle' ( ( ruleEString ) ) otherlv_4= 'rotationSens' ( ( ruleEString ) ) otherlv_6= '}'
            {
            otherlv_0=(Token)match(input,29,FOLLOW_3); 

            			newLeafNode(otherlv_0, grammarAccess.getRotationAccess().getRotationKeyword_0());
            		
            otherlv_1=(Token)match(input,12,FOLLOW_24); 

            			newLeafNode(otherlv_1, grammarAccess.getRotationAccess().getLeftCurlyBracketKeyword_1());
            		
            otherlv_2=(Token)match(input,30,FOLLOW_22); 

            			newLeafNode(otherlv_2, grammarAccess.getRotationAccess().getRotationAngleKeyword_2());
            		
            // InternalMyDsl.g:708:3: ( ( ruleEString ) )
            // InternalMyDsl.g:709:4: ( ruleEString )
            {
            // InternalMyDsl.g:709:4: ( ruleEString )
            // InternalMyDsl.g:710:5: ruleEString
            {

            					if (current==null) {
            						current = createModelElement(grammarAccess.getRotationRule());
            					}
            				

            					newCompositeNode(grammarAccess.getRotationAccess().getRotationAngleEntityCrossReference_3_0());
            				
            pushFollow(FOLLOW_25);
            ruleEString();

            state._fsp--;


            					afterParserOrEnumRuleCall();
            				

            }


            }

            otherlv_4=(Token)match(input,31,FOLLOW_22); 

            			newLeafNode(otherlv_4, grammarAccess.getRotationAccess().getRotationSensKeyword_4());
            		
            // InternalMyDsl.g:728:3: ( ( ruleEString ) )
            // InternalMyDsl.g:729:4: ( ruleEString )
            {
            // InternalMyDsl.g:729:4: ( ruleEString )
            // InternalMyDsl.g:730:5: ruleEString
            {

            					if (current==null) {
            						current = createModelElement(grammarAccess.getRotationRule());
            					}
            				

            					newCompositeNode(grammarAccess.getRotationAccess().getRotationSensEntityCrossReference_5_0());
            				
            pushFollow(FOLLOW_7);
            ruleEString();

            state._fsp--;


            					afterParserOrEnumRuleCall();
            				

            }


            }

            otherlv_6=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_6, grammarAccess.getRotationAccess().getRightCurlyBracketKeyword_6());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleRotation"


    // $ANTLR start "entryRuleLoop"
    // InternalMyDsl.g:752:1: entryRuleLoop returns [EObject current=null] : iv_ruleLoop= ruleLoop EOF ;
    public final EObject entryRuleLoop() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleLoop = null;


        try {
            // InternalMyDsl.g:752:45: (iv_ruleLoop= ruleLoop EOF )
            // InternalMyDsl.g:753:2: iv_ruleLoop= ruleLoop EOF
            {
             newCompositeNode(grammarAccess.getLoopRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleLoop=ruleLoop();

            state._fsp--;

             current =iv_ruleLoop; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleLoop"


    // $ANTLR start "ruleLoop"
    // InternalMyDsl.g:759:1: ruleLoop returns [EObject current=null] : ( () otherlv_1= 'Loop' otherlv_2= '{' (otherlv_3= 'booleanExpression' ( ( ruleEString ) ) )? (otherlv_5= 'instruction' otherlv_6= '{' ( (lv_instruction_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_instruction_9_0= ruleStatement ) ) )* otherlv_10= '}' )? (otherlv_11= 'variable' otherlv_12= '{' ( (lv_variable_13_0= ruleVariable ) ) (otherlv_14= ',' ( (lv_variable_15_0= ruleVariable ) ) )* otherlv_16= '}' )? otherlv_17= '}' ) ;
    public final EObject ruleLoop() throws RecognitionException {
        EObject current = null;

        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_3=null;
        Token otherlv_5=null;
        Token otherlv_6=null;
        Token otherlv_8=null;
        Token otherlv_10=null;
        Token otherlv_11=null;
        Token otherlv_12=null;
        Token otherlv_14=null;
        Token otherlv_16=null;
        Token otherlv_17=null;
        EObject lv_instruction_7_0 = null;

        EObject lv_instruction_9_0 = null;

        EObject lv_variable_13_0 = null;

        EObject lv_variable_15_0 = null;



        	enterRule();

        try {
            // InternalMyDsl.g:765:2: ( ( () otherlv_1= 'Loop' otherlv_2= '{' (otherlv_3= 'booleanExpression' ( ( ruleEString ) ) )? (otherlv_5= 'instruction' otherlv_6= '{' ( (lv_instruction_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_instruction_9_0= ruleStatement ) ) )* otherlv_10= '}' )? (otherlv_11= 'variable' otherlv_12= '{' ( (lv_variable_13_0= ruleVariable ) ) (otherlv_14= ',' ( (lv_variable_15_0= ruleVariable ) ) )* otherlv_16= '}' )? otherlv_17= '}' ) )
            // InternalMyDsl.g:766:2: ( () otherlv_1= 'Loop' otherlv_2= '{' (otherlv_3= 'booleanExpression' ( ( ruleEString ) ) )? (otherlv_5= 'instruction' otherlv_6= '{' ( (lv_instruction_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_instruction_9_0= ruleStatement ) ) )* otherlv_10= '}' )? (otherlv_11= 'variable' otherlv_12= '{' ( (lv_variable_13_0= ruleVariable ) ) (otherlv_14= ',' ( (lv_variable_15_0= ruleVariable ) ) )* otherlv_16= '}' )? otherlv_17= '}' )
            {
            // InternalMyDsl.g:766:2: ( () otherlv_1= 'Loop' otherlv_2= '{' (otherlv_3= 'booleanExpression' ( ( ruleEString ) ) )? (otherlv_5= 'instruction' otherlv_6= '{' ( (lv_instruction_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_instruction_9_0= ruleStatement ) ) )* otherlv_10= '}' )? (otherlv_11= 'variable' otherlv_12= '{' ( (lv_variable_13_0= ruleVariable ) ) (otherlv_14= ',' ( (lv_variable_15_0= ruleVariable ) ) )* otherlv_16= '}' )? otherlv_17= '}' )
            // InternalMyDsl.g:767:3: () otherlv_1= 'Loop' otherlv_2= '{' (otherlv_3= 'booleanExpression' ( ( ruleEString ) ) )? (otherlv_5= 'instruction' otherlv_6= '{' ( (lv_instruction_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_instruction_9_0= ruleStatement ) ) )* otherlv_10= '}' )? (otherlv_11= 'variable' otherlv_12= '{' ( (lv_variable_13_0= ruleVariable ) ) (otherlv_14= ',' ( (lv_variable_15_0= ruleVariable ) ) )* otherlv_16= '}' )? otherlv_17= '}'
            {
            // InternalMyDsl.g:767:3: ()
            // InternalMyDsl.g:768:4: 
            {

            				current = forceCreateModelElement(
            					grammarAccess.getLoopAccess().getLoopAction_0(),
            					current);
            			

            }

            otherlv_1=(Token)match(input,32,FOLLOW_3); 

            			newLeafNode(otherlv_1, grammarAccess.getLoopAccess().getLoopKeyword_1());
            		
            otherlv_2=(Token)match(input,12,FOLLOW_26); 

            			newLeafNode(otherlv_2, grammarAccess.getLoopAccess().getLeftCurlyBracketKeyword_2());
            		
            // InternalMyDsl.g:782:3: (otherlv_3= 'booleanExpression' ( ( ruleEString ) ) )?
            int alt16=2;
            int LA16_0 = input.LA(1);

            if ( (LA16_0==33) ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // InternalMyDsl.g:783:4: otherlv_3= 'booleanExpression' ( ( ruleEString ) )
                    {
                    otherlv_3=(Token)match(input,33,FOLLOW_22); 

                    				newLeafNode(otherlv_3, grammarAccess.getLoopAccess().getBooleanExpressionKeyword_3_0());
                    			
                    // InternalMyDsl.g:787:4: ( ( ruleEString ) )
                    // InternalMyDsl.g:788:5: ( ruleEString )
                    {
                    // InternalMyDsl.g:788:5: ( ruleEString )
                    // InternalMyDsl.g:789:6: ruleEString
                    {

                    						if (current==null) {
                    							current = createModelElement(grammarAccess.getLoopRule());
                    						}
                    					

                    						newCompositeNode(grammarAccess.getLoopAccess().getBooleanExpressionEntityCrossReference_3_1_0());
                    					
                    pushFollow(FOLLOW_11);
                    ruleEString();

                    state._fsp--;


                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            // InternalMyDsl.g:804:3: (otherlv_5= 'instruction' otherlv_6= '{' ( (lv_instruction_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_instruction_9_0= ruleStatement ) ) )* otherlv_10= '}' )?
            int alt18=2;
            int LA18_0 = input.LA(1);

            if ( (LA18_0==19) ) {
                alt18=1;
            }
            switch (alt18) {
                case 1 :
                    // InternalMyDsl.g:805:4: otherlv_5= 'instruction' otherlv_6= '{' ( (lv_instruction_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_instruction_9_0= ruleStatement ) ) )* otherlv_10= '}'
                    {
                    otherlv_5=(Token)match(input,19,FOLLOW_3); 

                    				newLeafNode(otherlv_5, grammarAccess.getLoopAccess().getInstructionKeyword_4_0());
                    			
                    otherlv_6=(Token)match(input,12,FOLLOW_12); 

                    				newLeafNode(otherlv_6, grammarAccess.getLoopAccess().getLeftCurlyBracketKeyword_4_1());
                    			
                    // InternalMyDsl.g:813:4: ( (lv_instruction_7_0= ruleStatement ) )
                    // InternalMyDsl.g:814:5: (lv_instruction_7_0= ruleStatement )
                    {
                    // InternalMyDsl.g:814:5: (lv_instruction_7_0= ruleStatement )
                    // InternalMyDsl.g:815:6: lv_instruction_7_0= ruleStatement
                    {

                    						newCompositeNode(grammarAccess.getLoopAccess().getInstructionStatementParserRuleCall_4_2_0());
                    					
                    pushFollow(FOLLOW_6);
                    lv_instruction_7_0=ruleStatement();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getLoopRule());
                    						}
                    						add(
                    							current,
                    							"instruction",
                    							lv_instruction_7_0,
                    							"org.xtext.example.mydsl.MyDsl.Statement");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }

                    // InternalMyDsl.g:832:4: (otherlv_8= ',' ( (lv_instruction_9_0= ruleStatement ) ) )*
                    loop17:
                    do {
                        int alt17=2;
                        int LA17_0 = input.LA(1);

                        if ( (LA17_0==14) ) {
                            alt17=1;
                        }


                        switch (alt17) {
                    	case 1 :
                    	    // InternalMyDsl.g:833:5: otherlv_8= ',' ( (lv_instruction_9_0= ruleStatement ) )
                    	    {
                    	    otherlv_8=(Token)match(input,14,FOLLOW_12); 

                    	    					newLeafNode(otherlv_8, grammarAccess.getLoopAccess().getCommaKeyword_4_3_0());
                    	    				
                    	    // InternalMyDsl.g:837:5: ( (lv_instruction_9_0= ruleStatement ) )
                    	    // InternalMyDsl.g:838:6: (lv_instruction_9_0= ruleStatement )
                    	    {
                    	    // InternalMyDsl.g:838:6: (lv_instruction_9_0= ruleStatement )
                    	    // InternalMyDsl.g:839:7: lv_instruction_9_0= ruleStatement
                    	    {

                    	    							newCompositeNode(grammarAccess.getLoopAccess().getInstructionStatementParserRuleCall_4_3_1_0());
                    	    						
                    	    pushFollow(FOLLOW_6);
                    	    lv_instruction_9_0=ruleStatement();

                    	    state._fsp--;


                    	    							if (current==null) {
                    	    								current = createModelElementForParent(grammarAccess.getLoopRule());
                    	    							}
                    	    							add(
                    	    								current,
                    	    								"instruction",
                    	    								lv_instruction_9_0,
                    	    								"org.xtext.example.mydsl.MyDsl.Statement");
                    	    							afterParserOrEnumRuleCall();
                    	    						

                    	    }


                    	    }


                    	    }
                    	    break;

                    	default :
                    	    break loop17;
                        }
                    } while (true);

                    otherlv_10=(Token)match(input,15,FOLLOW_13); 

                    				newLeafNode(otherlv_10, grammarAccess.getLoopAccess().getRightCurlyBracketKeyword_4_4());
                    			

                    }
                    break;

            }

            // InternalMyDsl.g:862:3: (otherlv_11= 'variable' otherlv_12= '{' ( (lv_variable_13_0= ruleVariable ) ) (otherlv_14= ',' ( (lv_variable_15_0= ruleVariable ) ) )* otherlv_16= '}' )?
            int alt20=2;
            int LA20_0 = input.LA(1);

            if ( (LA20_0==20) ) {
                alt20=1;
            }
            switch (alt20) {
                case 1 :
                    // InternalMyDsl.g:863:4: otherlv_11= 'variable' otherlv_12= '{' ( (lv_variable_13_0= ruleVariable ) ) (otherlv_14= ',' ( (lv_variable_15_0= ruleVariable ) ) )* otherlv_16= '}'
                    {
                    otherlv_11=(Token)match(input,20,FOLLOW_3); 

                    				newLeafNode(otherlv_11, grammarAccess.getLoopAccess().getVariableKeyword_5_0());
                    			
                    otherlv_12=(Token)match(input,12,FOLLOW_14); 

                    				newLeafNode(otherlv_12, grammarAccess.getLoopAccess().getLeftCurlyBracketKeyword_5_1());
                    			
                    // InternalMyDsl.g:871:4: ( (lv_variable_13_0= ruleVariable ) )
                    // InternalMyDsl.g:872:5: (lv_variable_13_0= ruleVariable )
                    {
                    // InternalMyDsl.g:872:5: (lv_variable_13_0= ruleVariable )
                    // InternalMyDsl.g:873:6: lv_variable_13_0= ruleVariable
                    {

                    						newCompositeNode(grammarAccess.getLoopAccess().getVariableVariableParserRuleCall_5_2_0());
                    					
                    pushFollow(FOLLOW_6);
                    lv_variable_13_0=ruleVariable();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getLoopRule());
                    						}
                    						add(
                    							current,
                    							"variable",
                    							lv_variable_13_0,
                    							"org.xtext.example.mydsl.MyDsl.Variable");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }

                    // InternalMyDsl.g:890:4: (otherlv_14= ',' ( (lv_variable_15_0= ruleVariable ) ) )*
                    loop19:
                    do {
                        int alt19=2;
                        int LA19_0 = input.LA(1);

                        if ( (LA19_0==14) ) {
                            alt19=1;
                        }


                        switch (alt19) {
                    	case 1 :
                    	    // InternalMyDsl.g:891:5: otherlv_14= ',' ( (lv_variable_15_0= ruleVariable ) )
                    	    {
                    	    otherlv_14=(Token)match(input,14,FOLLOW_14); 

                    	    					newLeafNode(otherlv_14, grammarAccess.getLoopAccess().getCommaKeyword_5_3_0());
                    	    				
                    	    // InternalMyDsl.g:895:5: ( (lv_variable_15_0= ruleVariable ) )
                    	    // InternalMyDsl.g:896:6: (lv_variable_15_0= ruleVariable )
                    	    {
                    	    // InternalMyDsl.g:896:6: (lv_variable_15_0= ruleVariable )
                    	    // InternalMyDsl.g:897:7: lv_variable_15_0= ruleVariable
                    	    {

                    	    							newCompositeNode(grammarAccess.getLoopAccess().getVariableVariableParserRuleCall_5_3_1_0());
                    	    						
                    	    pushFollow(FOLLOW_6);
                    	    lv_variable_15_0=ruleVariable();

                    	    state._fsp--;


                    	    							if (current==null) {
                    	    								current = createModelElementForParent(grammarAccess.getLoopRule());
                    	    							}
                    	    							add(
                    	    								current,
                    	    								"variable",
                    	    								lv_variable_15_0,
                    	    								"org.xtext.example.mydsl.MyDsl.Variable");
                    	    							afterParserOrEnumRuleCall();
                    	    						

                    	    }


                    	    }


                    	    }
                    	    break;

                    	default :
                    	    break loop19;
                        }
                    } while (true);

                    otherlv_16=(Token)match(input,15,FOLLOW_7); 

                    				newLeafNode(otherlv_16, grammarAccess.getLoopAccess().getRightCurlyBracketKeyword_5_4());
                    			

                    }
                    break;

            }

            otherlv_17=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_17, grammarAccess.getLoopAccess().getRightCurlyBracketKeyword_6());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleLoop"


    // $ANTLR start "entryRuleAssignement"
    // InternalMyDsl.g:928:1: entryRuleAssignement returns [EObject current=null] : iv_ruleAssignement= ruleAssignement EOF ;
    public final EObject entryRuleAssignement() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleAssignement = null;


        try {
            // InternalMyDsl.g:928:52: (iv_ruleAssignement= ruleAssignement EOF )
            // InternalMyDsl.g:929:2: iv_ruleAssignement= ruleAssignement EOF
            {
             newCompositeNode(grammarAccess.getAssignementRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleAssignement=ruleAssignement();

            state._fsp--;

             current =iv_ruleAssignement; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleAssignement"


    // $ANTLR start "ruleAssignement"
    // InternalMyDsl.g:935:1: ruleAssignement returns [EObject current=null] : (otherlv_0= 'Assignement' otherlv_1= '{' (otherlv_2= 'assignableVariable' ( ( ruleEString ) ) )? otherlv_4= 'entity' ( ( ruleEString ) ) otherlv_6= '}' ) ;
    public final EObject ruleAssignement() throws RecognitionException {
        EObject current = null;

        Token otherlv_0=null;
        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_4=null;
        Token otherlv_6=null;


        	enterRule();

        try {
            // InternalMyDsl.g:941:2: ( (otherlv_0= 'Assignement' otherlv_1= '{' (otherlv_2= 'assignableVariable' ( ( ruleEString ) ) )? otherlv_4= 'entity' ( ( ruleEString ) ) otherlv_6= '}' ) )
            // InternalMyDsl.g:942:2: (otherlv_0= 'Assignement' otherlv_1= '{' (otherlv_2= 'assignableVariable' ( ( ruleEString ) ) )? otherlv_4= 'entity' ( ( ruleEString ) ) otherlv_6= '}' )
            {
            // InternalMyDsl.g:942:2: (otherlv_0= 'Assignement' otherlv_1= '{' (otherlv_2= 'assignableVariable' ( ( ruleEString ) ) )? otherlv_4= 'entity' ( ( ruleEString ) ) otherlv_6= '}' )
            // InternalMyDsl.g:943:3: otherlv_0= 'Assignement' otherlv_1= '{' (otherlv_2= 'assignableVariable' ( ( ruleEString ) ) )? otherlv_4= 'entity' ( ( ruleEString ) ) otherlv_6= '}'
            {
            otherlv_0=(Token)match(input,34,FOLLOW_3); 

            			newLeafNode(otherlv_0, grammarAccess.getAssignementAccess().getAssignementKeyword_0());
            		
            otherlv_1=(Token)match(input,12,FOLLOW_27); 

            			newLeafNode(otherlv_1, grammarAccess.getAssignementAccess().getLeftCurlyBracketKeyword_1());
            		
            // InternalMyDsl.g:951:3: (otherlv_2= 'assignableVariable' ( ( ruleEString ) ) )?
            int alt21=2;
            int LA21_0 = input.LA(1);

            if ( (LA21_0==35) ) {
                alt21=1;
            }
            switch (alt21) {
                case 1 :
                    // InternalMyDsl.g:952:4: otherlv_2= 'assignableVariable' ( ( ruleEString ) )
                    {
                    otherlv_2=(Token)match(input,35,FOLLOW_22); 

                    				newLeafNode(otherlv_2, grammarAccess.getAssignementAccess().getAssignableVariableKeyword_2_0());
                    			
                    // InternalMyDsl.g:956:4: ( ( ruleEString ) )
                    // InternalMyDsl.g:957:5: ( ruleEString )
                    {
                    // InternalMyDsl.g:957:5: ( ruleEString )
                    // InternalMyDsl.g:958:6: ruleEString
                    {

                    						if (current==null) {
                    							current = createModelElement(grammarAccess.getAssignementRule());
                    						}
                    					

                    						newCompositeNode(grammarAccess.getAssignementAccess().getAssignableVariableVariableCrossReference_2_1_0());
                    					
                    pushFollow(FOLLOW_28);
                    ruleEString();

                    state._fsp--;


                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            otherlv_4=(Token)match(input,36,FOLLOW_22); 

            			newLeafNode(otherlv_4, grammarAccess.getAssignementAccess().getEntityKeyword_3());
            		
            // InternalMyDsl.g:977:3: ( ( ruleEString ) )
            // InternalMyDsl.g:978:4: ( ruleEString )
            {
            // InternalMyDsl.g:978:4: ( ruleEString )
            // InternalMyDsl.g:979:5: ruleEString
            {

            					if (current==null) {
            						current = createModelElement(grammarAccess.getAssignementRule());
            					}
            				

            					newCompositeNode(grammarAccess.getAssignementAccess().getEntityEntityCrossReference_4_0());
            				
            pushFollow(FOLLOW_7);
            ruleEString();

            state._fsp--;


            					afterParserOrEnumRuleCall();
            				

            }


            }

            otherlv_6=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_6, grammarAccess.getAssignementAccess().getRightCurlyBracketKeyword_5());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleAssignement"


    // $ANTLR start "entryRuleSetValue"
    // InternalMyDsl.g:1001:1: entryRuleSetValue returns [EObject current=null] : iv_ruleSetValue= ruleSetValue EOF ;
    public final EObject entryRuleSetValue() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleSetValue = null;


        try {
            // InternalMyDsl.g:1001:49: (iv_ruleSetValue= ruleSetValue EOF )
            // InternalMyDsl.g:1002:2: iv_ruleSetValue= ruleSetValue EOF
            {
             newCompositeNode(grammarAccess.getSetValueRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleSetValue=ruleSetValue();

            state._fsp--;

             current =iv_ruleSetValue; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleSetValue"


    // $ANTLR start "ruleSetValue"
    // InternalMyDsl.g:1008:1: ruleSetValue returns [EObject current=null] : (otherlv_0= 'SetValue' otherlv_1= '{' otherlv_2= 'entityToSet' ( ( ruleEString ) ) otherlv_4= '}' ) ;
    public final EObject ruleSetValue() throws RecognitionException {
        EObject current = null;

        Token otherlv_0=null;
        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_4=null;


        	enterRule();

        try {
            // InternalMyDsl.g:1014:2: ( (otherlv_0= 'SetValue' otherlv_1= '{' otherlv_2= 'entityToSet' ( ( ruleEString ) ) otherlv_4= '}' ) )
            // InternalMyDsl.g:1015:2: (otherlv_0= 'SetValue' otherlv_1= '{' otherlv_2= 'entityToSet' ( ( ruleEString ) ) otherlv_4= '}' )
            {
            // InternalMyDsl.g:1015:2: (otherlv_0= 'SetValue' otherlv_1= '{' otherlv_2= 'entityToSet' ( ( ruleEString ) ) otherlv_4= '}' )
            // InternalMyDsl.g:1016:3: otherlv_0= 'SetValue' otherlv_1= '{' otherlv_2= 'entityToSet' ( ( ruleEString ) ) otherlv_4= '}'
            {
            otherlv_0=(Token)match(input,37,FOLLOW_3); 

            			newLeafNode(otherlv_0, grammarAccess.getSetValueAccess().getSetValueKeyword_0());
            		
            otherlv_1=(Token)match(input,12,FOLLOW_29); 

            			newLeafNode(otherlv_1, grammarAccess.getSetValueAccess().getLeftCurlyBracketKeyword_1());
            		
            otherlv_2=(Token)match(input,38,FOLLOW_22); 

            			newLeafNode(otherlv_2, grammarAccess.getSetValueAccess().getEntityToSetKeyword_2());
            		
            // InternalMyDsl.g:1028:3: ( ( ruleEString ) )
            // InternalMyDsl.g:1029:4: ( ruleEString )
            {
            // InternalMyDsl.g:1029:4: ( ruleEString )
            // InternalMyDsl.g:1030:5: ruleEString
            {

            					if (current==null) {
            						current = createModelElement(grammarAccess.getSetValueRule());
            					}
            				

            					newCompositeNode(grammarAccess.getSetValueAccess().getEntityToSetEntityCrossReference_3_0());
            				
            pushFollow(FOLLOW_7);
            ruleEString();

            state._fsp--;


            					afterParserOrEnumRuleCall();
            				

            }


            }

            otherlv_4=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_4, grammarAccess.getSetValueAccess().getRightCurlyBracketKeyword_4());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleSetValue"


    // $ANTLR start "entryRuleCondition"
    // InternalMyDsl.g:1052:1: entryRuleCondition returns [EObject current=null] : iv_ruleCondition= ruleCondition EOF ;
    public final EObject entryRuleCondition() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleCondition = null;


        try {
            // InternalMyDsl.g:1052:50: (iv_ruleCondition= ruleCondition EOF )
            // InternalMyDsl.g:1053:2: iv_ruleCondition= ruleCondition EOF
            {
             newCompositeNode(grammarAccess.getConditionRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleCondition=ruleCondition();

            state._fsp--;

             current =iv_ruleCondition; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleCondition"


    // $ANTLR start "ruleCondition"
    // InternalMyDsl.g:1059:1: ruleCondition returns [EObject current=null] : ( () otherlv_1= 'Condition' otherlv_2= '{' (otherlv_3= 'booleanExpression' ( ( ruleEString ) ) )? (otherlv_5= 'statementIf' otherlv_6= '{' ( (lv_statementIf_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_statementIf_9_0= ruleStatement ) ) )* otherlv_10= '}' )? (otherlv_11= 'statementElse' otherlv_12= '{' ( (lv_statementElse_13_0= ruleStatement ) ) (otherlv_14= ',' ( (lv_statementElse_15_0= ruleStatement ) ) )* otherlv_16= '}' )? (otherlv_17= 'variable' otherlv_18= '{' ( (lv_variable_19_0= ruleVariable ) ) (otherlv_20= ',' ( (lv_variable_21_0= ruleVariable ) ) )* otherlv_22= '}' )? otherlv_23= '}' ) ;
    public final EObject ruleCondition() throws RecognitionException {
        EObject current = null;

        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_3=null;
        Token otherlv_5=null;
        Token otherlv_6=null;
        Token otherlv_8=null;
        Token otherlv_10=null;
        Token otherlv_11=null;
        Token otherlv_12=null;
        Token otherlv_14=null;
        Token otherlv_16=null;
        Token otherlv_17=null;
        Token otherlv_18=null;
        Token otherlv_20=null;
        Token otherlv_22=null;
        Token otherlv_23=null;
        EObject lv_statementIf_7_0 = null;

        EObject lv_statementIf_9_0 = null;

        EObject lv_statementElse_13_0 = null;

        EObject lv_statementElse_15_0 = null;

        EObject lv_variable_19_0 = null;

        EObject lv_variable_21_0 = null;



        	enterRule();

        try {
            // InternalMyDsl.g:1065:2: ( ( () otherlv_1= 'Condition' otherlv_2= '{' (otherlv_3= 'booleanExpression' ( ( ruleEString ) ) )? (otherlv_5= 'statementIf' otherlv_6= '{' ( (lv_statementIf_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_statementIf_9_0= ruleStatement ) ) )* otherlv_10= '}' )? (otherlv_11= 'statementElse' otherlv_12= '{' ( (lv_statementElse_13_0= ruleStatement ) ) (otherlv_14= ',' ( (lv_statementElse_15_0= ruleStatement ) ) )* otherlv_16= '}' )? (otherlv_17= 'variable' otherlv_18= '{' ( (lv_variable_19_0= ruleVariable ) ) (otherlv_20= ',' ( (lv_variable_21_0= ruleVariable ) ) )* otherlv_22= '}' )? otherlv_23= '}' ) )
            // InternalMyDsl.g:1066:2: ( () otherlv_1= 'Condition' otherlv_2= '{' (otherlv_3= 'booleanExpression' ( ( ruleEString ) ) )? (otherlv_5= 'statementIf' otherlv_6= '{' ( (lv_statementIf_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_statementIf_9_0= ruleStatement ) ) )* otherlv_10= '}' )? (otherlv_11= 'statementElse' otherlv_12= '{' ( (lv_statementElse_13_0= ruleStatement ) ) (otherlv_14= ',' ( (lv_statementElse_15_0= ruleStatement ) ) )* otherlv_16= '}' )? (otherlv_17= 'variable' otherlv_18= '{' ( (lv_variable_19_0= ruleVariable ) ) (otherlv_20= ',' ( (lv_variable_21_0= ruleVariable ) ) )* otherlv_22= '}' )? otherlv_23= '}' )
            {
            // InternalMyDsl.g:1066:2: ( () otherlv_1= 'Condition' otherlv_2= '{' (otherlv_3= 'booleanExpression' ( ( ruleEString ) ) )? (otherlv_5= 'statementIf' otherlv_6= '{' ( (lv_statementIf_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_statementIf_9_0= ruleStatement ) ) )* otherlv_10= '}' )? (otherlv_11= 'statementElse' otherlv_12= '{' ( (lv_statementElse_13_0= ruleStatement ) ) (otherlv_14= ',' ( (lv_statementElse_15_0= ruleStatement ) ) )* otherlv_16= '}' )? (otherlv_17= 'variable' otherlv_18= '{' ( (lv_variable_19_0= ruleVariable ) ) (otherlv_20= ',' ( (lv_variable_21_0= ruleVariable ) ) )* otherlv_22= '}' )? otherlv_23= '}' )
            // InternalMyDsl.g:1067:3: () otherlv_1= 'Condition' otherlv_2= '{' (otherlv_3= 'booleanExpression' ( ( ruleEString ) ) )? (otherlv_5= 'statementIf' otherlv_6= '{' ( (lv_statementIf_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_statementIf_9_0= ruleStatement ) ) )* otherlv_10= '}' )? (otherlv_11= 'statementElse' otherlv_12= '{' ( (lv_statementElse_13_0= ruleStatement ) ) (otherlv_14= ',' ( (lv_statementElse_15_0= ruleStatement ) ) )* otherlv_16= '}' )? (otherlv_17= 'variable' otherlv_18= '{' ( (lv_variable_19_0= ruleVariable ) ) (otherlv_20= ',' ( (lv_variable_21_0= ruleVariable ) ) )* otherlv_22= '}' )? otherlv_23= '}'
            {
            // InternalMyDsl.g:1067:3: ()
            // InternalMyDsl.g:1068:4: 
            {

            				current = forceCreateModelElement(
            					grammarAccess.getConditionAccess().getConditionAction_0(),
            					current);
            			

            }

            otherlv_1=(Token)match(input,39,FOLLOW_3); 

            			newLeafNode(otherlv_1, grammarAccess.getConditionAccess().getConditionKeyword_1());
            		
            otherlv_2=(Token)match(input,12,FOLLOW_30); 

            			newLeafNode(otherlv_2, grammarAccess.getConditionAccess().getLeftCurlyBracketKeyword_2());
            		
            // InternalMyDsl.g:1082:3: (otherlv_3= 'booleanExpression' ( ( ruleEString ) ) )?
            int alt22=2;
            int LA22_0 = input.LA(1);

            if ( (LA22_0==33) ) {
                alt22=1;
            }
            switch (alt22) {
                case 1 :
                    // InternalMyDsl.g:1083:4: otherlv_3= 'booleanExpression' ( ( ruleEString ) )
                    {
                    otherlv_3=(Token)match(input,33,FOLLOW_22); 

                    				newLeafNode(otherlv_3, grammarAccess.getConditionAccess().getBooleanExpressionKeyword_3_0());
                    			
                    // InternalMyDsl.g:1087:4: ( ( ruleEString ) )
                    // InternalMyDsl.g:1088:5: ( ruleEString )
                    {
                    // InternalMyDsl.g:1088:5: ( ruleEString )
                    // InternalMyDsl.g:1089:6: ruleEString
                    {

                    						if (current==null) {
                    							current = createModelElement(grammarAccess.getConditionRule());
                    						}
                    					

                    						newCompositeNode(grammarAccess.getConditionAccess().getBooleanExpressionEntityCrossReference_3_1_0());
                    					
                    pushFollow(FOLLOW_31);
                    ruleEString();

                    state._fsp--;


                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            // InternalMyDsl.g:1104:3: (otherlv_5= 'statementIf' otherlv_6= '{' ( (lv_statementIf_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_statementIf_9_0= ruleStatement ) ) )* otherlv_10= '}' )?
            int alt24=2;
            int LA24_0 = input.LA(1);

            if ( (LA24_0==40) ) {
                alt24=1;
            }
            switch (alt24) {
                case 1 :
                    // InternalMyDsl.g:1105:4: otherlv_5= 'statementIf' otherlv_6= '{' ( (lv_statementIf_7_0= ruleStatement ) ) (otherlv_8= ',' ( (lv_statementIf_9_0= ruleStatement ) ) )* otherlv_10= '}'
                    {
                    otherlv_5=(Token)match(input,40,FOLLOW_3); 

                    				newLeafNode(otherlv_5, grammarAccess.getConditionAccess().getStatementIfKeyword_4_0());
                    			
                    otherlv_6=(Token)match(input,12,FOLLOW_12); 

                    				newLeafNode(otherlv_6, grammarAccess.getConditionAccess().getLeftCurlyBracketKeyword_4_1());
                    			
                    // InternalMyDsl.g:1113:4: ( (lv_statementIf_7_0= ruleStatement ) )
                    // InternalMyDsl.g:1114:5: (lv_statementIf_7_0= ruleStatement )
                    {
                    // InternalMyDsl.g:1114:5: (lv_statementIf_7_0= ruleStatement )
                    // InternalMyDsl.g:1115:6: lv_statementIf_7_0= ruleStatement
                    {

                    						newCompositeNode(grammarAccess.getConditionAccess().getStatementIfStatementParserRuleCall_4_2_0());
                    					
                    pushFollow(FOLLOW_6);
                    lv_statementIf_7_0=ruleStatement();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getConditionRule());
                    						}
                    						add(
                    							current,
                    							"statementIf",
                    							lv_statementIf_7_0,
                    							"org.xtext.example.mydsl.MyDsl.Statement");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }

                    // InternalMyDsl.g:1132:4: (otherlv_8= ',' ( (lv_statementIf_9_0= ruleStatement ) ) )*
                    loop23:
                    do {
                        int alt23=2;
                        int LA23_0 = input.LA(1);

                        if ( (LA23_0==14) ) {
                            alt23=1;
                        }


                        switch (alt23) {
                    	case 1 :
                    	    // InternalMyDsl.g:1133:5: otherlv_8= ',' ( (lv_statementIf_9_0= ruleStatement ) )
                    	    {
                    	    otherlv_8=(Token)match(input,14,FOLLOW_12); 

                    	    					newLeafNode(otherlv_8, grammarAccess.getConditionAccess().getCommaKeyword_4_3_0());
                    	    				
                    	    // InternalMyDsl.g:1137:5: ( (lv_statementIf_9_0= ruleStatement ) )
                    	    // InternalMyDsl.g:1138:6: (lv_statementIf_9_0= ruleStatement )
                    	    {
                    	    // InternalMyDsl.g:1138:6: (lv_statementIf_9_0= ruleStatement )
                    	    // InternalMyDsl.g:1139:7: lv_statementIf_9_0= ruleStatement
                    	    {

                    	    							newCompositeNode(grammarAccess.getConditionAccess().getStatementIfStatementParserRuleCall_4_3_1_0());
                    	    						
                    	    pushFollow(FOLLOW_6);
                    	    lv_statementIf_9_0=ruleStatement();

                    	    state._fsp--;


                    	    							if (current==null) {
                    	    								current = createModelElementForParent(grammarAccess.getConditionRule());
                    	    							}
                    	    							add(
                    	    								current,
                    	    								"statementIf",
                    	    								lv_statementIf_9_0,
                    	    								"org.xtext.example.mydsl.MyDsl.Statement");
                    	    							afterParserOrEnumRuleCall();
                    	    						

                    	    }


                    	    }


                    	    }
                    	    break;

                    	default :
                    	    break loop23;
                        }
                    } while (true);

                    otherlv_10=(Token)match(input,15,FOLLOW_32); 

                    				newLeafNode(otherlv_10, grammarAccess.getConditionAccess().getRightCurlyBracketKeyword_4_4());
                    			

                    }
                    break;

            }

            // InternalMyDsl.g:1162:3: (otherlv_11= 'statementElse' otherlv_12= '{' ( (lv_statementElse_13_0= ruleStatement ) ) (otherlv_14= ',' ( (lv_statementElse_15_0= ruleStatement ) ) )* otherlv_16= '}' )?
            int alt26=2;
            int LA26_0 = input.LA(1);

            if ( (LA26_0==41) ) {
                alt26=1;
            }
            switch (alt26) {
                case 1 :
                    // InternalMyDsl.g:1163:4: otherlv_11= 'statementElse' otherlv_12= '{' ( (lv_statementElse_13_0= ruleStatement ) ) (otherlv_14= ',' ( (lv_statementElse_15_0= ruleStatement ) ) )* otherlv_16= '}'
                    {
                    otherlv_11=(Token)match(input,41,FOLLOW_3); 

                    				newLeafNode(otherlv_11, grammarAccess.getConditionAccess().getStatementElseKeyword_5_0());
                    			
                    otherlv_12=(Token)match(input,12,FOLLOW_12); 

                    				newLeafNode(otherlv_12, grammarAccess.getConditionAccess().getLeftCurlyBracketKeyword_5_1());
                    			
                    // InternalMyDsl.g:1171:4: ( (lv_statementElse_13_0= ruleStatement ) )
                    // InternalMyDsl.g:1172:5: (lv_statementElse_13_0= ruleStatement )
                    {
                    // InternalMyDsl.g:1172:5: (lv_statementElse_13_0= ruleStatement )
                    // InternalMyDsl.g:1173:6: lv_statementElse_13_0= ruleStatement
                    {

                    						newCompositeNode(grammarAccess.getConditionAccess().getStatementElseStatementParserRuleCall_5_2_0());
                    					
                    pushFollow(FOLLOW_6);
                    lv_statementElse_13_0=ruleStatement();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getConditionRule());
                    						}
                    						add(
                    							current,
                    							"statementElse",
                    							lv_statementElse_13_0,
                    							"org.xtext.example.mydsl.MyDsl.Statement");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }

                    // InternalMyDsl.g:1190:4: (otherlv_14= ',' ( (lv_statementElse_15_0= ruleStatement ) ) )*
                    loop25:
                    do {
                        int alt25=2;
                        int LA25_0 = input.LA(1);

                        if ( (LA25_0==14) ) {
                            alt25=1;
                        }


                        switch (alt25) {
                    	case 1 :
                    	    // InternalMyDsl.g:1191:5: otherlv_14= ',' ( (lv_statementElse_15_0= ruleStatement ) )
                    	    {
                    	    otherlv_14=(Token)match(input,14,FOLLOW_12); 

                    	    					newLeafNode(otherlv_14, grammarAccess.getConditionAccess().getCommaKeyword_5_3_0());
                    	    				
                    	    // InternalMyDsl.g:1195:5: ( (lv_statementElse_15_0= ruleStatement ) )
                    	    // InternalMyDsl.g:1196:6: (lv_statementElse_15_0= ruleStatement )
                    	    {
                    	    // InternalMyDsl.g:1196:6: (lv_statementElse_15_0= ruleStatement )
                    	    // InternalMyDsl.g:1197:7: lv_statementElse_15_0= ruleStatement
                    	    {

                    	    							newCompositeNode(grammarAccess.getConditionAccess().getStatementElseStatementParserRuleCall_5_3_1_0());
                    	    						
                    	    pushFollow(FOLLOW_6);
                    	    lv_statementElse_15_0=ruleStatement();

                    	    state._fsp--;


                    	    							if (current==null) {
                    	    								current = createModelElementForParent(grammarAccess.getConditionRule());
                    	    							}
                    	    							add(
                    	    								current,
                    	    								"statementElse",
                    	    								lv_statementElse_15_0,
                    	    								"org.xtext.example.mydsl.MyDsl.Statement");
                    	    							afterParserOrEnumRuleCall();
                    	    						

                    	    }


                    	    }


                    	    }
                    	    break;

                    	default :
                    	    break loop25;
                        }
                    } while (true);

                    otherlv_16=(Token)match(input,15,FOLLOW_13); 

                    				newLeafNode(otherlv_16, grammarAccess.getConditionAccess().getRightCurlyBracketKeyword_5_4());
                    			

                    }
                    break;

            }

            // InternalMyDsl.g:1220:3: (otherlv_17= 'variable' otherlv_18= '{' ( (lv_variable_19_0= ruleVariable ) ) (otherlv_20= ',' ( (lv_variable_21_0= ruleVariable ) ) )* otherlv_22= '}' )?
            int alt28=2;
            int LA28_0 = input.LA(1);

            if ( (LA28_0==20) ) {
                alt28=1;
            }
            switch (alt28) {
                case 1 :
                    // InternalMyDsl.g:1221:4: otherlv_17= 'variable' otherlv_18= '{' ( (lv_variable_19_0= ruleVariable ) ) (otherlv_20= ',' ( (lv_variable_21_0= ruleVariable ) ) )* otherlv_22= '}'
                    {
                    otherlv_17=(Token)match(input,20,FOLLOW_3); 

                    				newLeafNode(otherlv_17, grammarAccess.getConditionAccess().getVariableKeyword_6_0());
                    			
                    otherlv_18=(Token)match(input,12,FOLLOW_14); 

                    				newLeafNode(otherlv_18, grammarAccess.getConditionAccess().getLeftCurlyBracketKeyword_6_1());
                    			
                    // InternalMyDsl.g:1229:4: ( (lv_variable_19_0= ruleVariable ) )
                    // InternalMyDsl.g:1230:5: (lv_variable_19_0= ruleVariable )
                    {
                    // InternalMyDsl.g:1230:5: (lv_variable_19_0= ruleVariable )
                    // InternalMyDsl.g:1231:6: lv_variable_19_0= ruleVariable
                    {

                    						newCompositeNode(grammarAccess.getConditionAccess().getVariableVariableParserRuleCall_6_2_0());
                    					
                    pushFollow(FOLLOW_6);
                    lv_variable_19_0=ruleVariable();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getConditionRule());
                    						}
                    						add(
                    							current,
                    							"variable",
                    							lv_variable_19_0,
                    							"org.xtext.example.mydsl.MyDsl.Variable");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }

                    // InternalMyDsl.g:1248:4: (otherlv_20= ',' ( (lv_variable_21_0= ruleVariable ) ) )*
                    loop27:
                    do {
                        int alt27=2;
                        int LA27_0 = input.LA(1);

                        if ( (LA27_0==14) ) {
                            alt27=1;
                        }


                        switch (alt27) {
                    	case 1 :
                    	    // InternalMyDsl.g:1249:5: otherlv_20= ',' ( (lv_variable_21_0= ruleVariable ) )
                    	    {
                    	    otherlv_20=(Token)match(input,14,FOLLOW_14); 

                    	    					newLeafNode(otherlv_20, grammarAccess.getConditionAccess().getCommaKeyword_6_3_0());
                    	    				
                    	    // InternalMyDsl.g:1253:5: ( (lv_variable_21_0= ruleVariable ) )
                    	    // InternalMyDsl.g:1254:6: (lv_variable_21_0= ruleVariable )
                    	    {
                    	    // InternalMyDsl.g:1254:6: (lv_variable_21_0= ruleVariable )
                    	    // InternalMyDsl.g:1255:7: lv_variable_21_0= ruleVariable
                    	    {

                    	    							newCompositeNode(grammarAccess.getConditionAccess().getVariableVariableParserRuleCall_6_3_1_0());
                    	    						
                    	    pushFollow(FOLLOW_6);
                    	    lv_variable_21_0=ruleVariable();

                    	    state._fsp--;


                    	    							if (current==null) {
                    	    								current = createModelElementForParent(grammarAccess.getConditionRule());
                    	    							}
                    	    							add(
                    	    								current,
                    	    								"variable",
                    	    								lv_variable_21_0,
                    	    								"org.xtext.example.mydsl.MyDsl.Variable");
                    	    							afterParserOrEnumRuleCall();
                    	    						

                    	    }


                    	    }


                    	    }
                    	    break;

                    	default :
                    	    break loop27;
                        }
                    } while (true);

                    otherlv_22=(Token)match(input,15,FOLLOW_7); 

                    				newLeafNode(otherlv_22, grammarAccess.getConditionAccess().getRightCurlyBracketKeyword_6_4());
                    			

                    }
                    break;

            }

            otherlv_23=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_23, grammarAccess.getConditionAccess().getRightCurlyBracketKeyword_7());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleCondition"


    // $ANTLR start "entryRuleEntity_Impl"
    // InternalMyDsl.g:1286:1: entryRuleEntity_Impl returns [EObject current=null] : iv_ruleEntity_Impl= ruleEntity_Impl EOF ;
    public final EObject entryRuleEntity_Impl() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleEntity_Impl = null;


        try {
            // InternalMyDsl.g:1286:52: (iv_ruleEntity_Impl= ruleEntity_Impl EOF )
            // InternalMyDsl.g:1287:2: iv_ruleEntity_Impl= ruleEntity_Impl EOF
            {
             newCompositeNode(grammarAccess.getEntity_ImplRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleEntity_Impl=ruleEntity_Impl();

            state._fsp--;

             current =iv_ruleEntity_Impl; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleEntity_Impl"


    // $ANTLR start "ruleEntity_Impl"
    // InternalMyDsl.g:1293:1: ruleEntity_Impl returns [EObject current=null] : ( () otherlv_1= 'Entity' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}' ) ;
    public final EObject ruleEntity_Impl() throws RecognitionException {
        EObject current = null;

        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_3=null;
        Token otherlv_5=null;
        Enumerator lv_entityType_4_0 = null;



        	enterRule();

        try {
            // InternalMyDsl.g:1299:2: ( ( () otherlv_1= 'Entity' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}' ) )
            // InternalMyDsl.g:1300:2: ( () otherlv_1= 'Entity' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}' )
            {
            // InternalMyDsl.g:1300:2: ( () otherlv_1= 'Entity' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}' )
            // InternalMyDsl.g:1301:3: () otherlv_1= 'Entity' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}'
            {
            // InternalMyDsl.g:1301:3: ()
            // InternalMyDsl.g:1302:4: 
            {

            				current = forceCreateModelElement(
            					grammarAccess.getEntity_ImplAccess().getEntityAction_0(),
            					current);
            			

            }

            otherlv_1=(Token)match(input,42,FOLLOW_3); 

            			newLeafNode(otherlv_1, grammarAccess.getEntity_ImplAccess().getEntityKeyword_1());
            		
            otherlv_2=(Token)match(input,12,FOLLOW_33); 

            			newLeafNode(otherlv_2, grammarAccess.getEntity_ImplAccess().getLeftCurlyBracketKeyword_2());
            		
            // InternalMyDsl.g:1316:3: (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )?
            int alt29=2;
            int LA29_0 = input.LA(1);

            if ( (LA29_0==43) ) {
                alt29=1;
            }
            switch (alt29) {
                case 1 :
                    // InternalMyDsl.g:1317:4: otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) )
                    {
                    otherlv_3=(Token)match(input,43,FOLLOW_9); 

                    				newLeafNode(otherlv_3, grammarAccess.getEntity_ImplAccess().getEntityTypeKeyword_3_0());
                    			
                    // InternalMyDsl.g:1321:4: ( (lv_entityType_4_0= ruleRMLObject ) )
                    // InternalMyDsl.g:1322:5: (lv_entityType_4_0= ruleRMLObject )
                    {
                    // InternalMyDsl.g:1322:5: (lv_entityType_4_0= ruleRMLObject )
                    // InternalMyDsl.g:1323:6: lv_entityType_4_0= ruleRMLObject
                    {

                    						newCompositeNode(grammarAccess.getEntity_ImplAccess().getEntityTypeRMLObjectEnumRuleCall_3_1_0());
                    					
                    pushFollow(FOLLOW_7);
                    lv_entityType_4_0=ruleRMLObject();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getEntity_ImplRule());
                    						}
                    						set(
                    							current,
                    							"entityType",
                    							lv_entityType_4_0,
                    							"org.xtext.example.mydsl.MyDsl.RMLObject");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            otherlv_5=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_5, grammarAccess.getEntity_ImplAccess().getRightCurlyBracketKeyword_4());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleEntity_Impl"


    // $ANTLR start "entryRuleFunctionCall"
    // InternalMyDsl.g:1349:1: entryRuleFunctionCall returns [EObject current=null] : iv_ruleFunctionCall= ruleFunctionCall EOF ;
    public final EObject entryRuleFunctionCall() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleFunctionCall = null;


        try {
            // InternalMyDsl.g:1349:53: (iv_ruleFunctionCall= ruleFunctionCall EOF )
            // InternalMyDsl.g:1350:2: iv_ruleFunctionCall= ruleFunctionCall EOF
            {
             newCompositeNode(grammarAccess.getFunctionCallRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleFunctionCall=ruleFunctionCall();

            state._fsp--;

             current =iv_ruleFunctionCall; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleFunctionCall"


    // $ANTLR start "ruleFunctionCall"
    // InternalMyDsl.g:1356:1: ruleFunctionCall returns [EObject current=null] : (otherlv_0= 'FunctionCall' otherlv_1= '{' (otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) ) )? otherlv_4= 'function' ( ( ruleEString ) ) otherlv_6= '}' ) ;
    public final EObject ruleFunctionCall() throws RecognitionException {
        EObject current = null;

        Token otherlv_0=null;
        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_4=null;
        Token otherlv_6=null;
        Enumerator lv_entityType_3_0 = null;



        	enterRule();

        try {
            // InternalMyDsl.g:1362:2: ( (otherlv_0= 'FunctionCall' otherlv_1= '{' (otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) ) )? otherlv_4= 'function' ( ( ruleEString ) ) otherlv_6= '}' ) )
            // InternalMyDsl.g:1363:2: (otherlv_0= 'FunctionCall' otherlv_1= '{' (otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) ) )? otherlv_4= 'function' ( ( ruleEString ) ) otherlv_6= '}' )
            {
            // InternalMyDsl.g:1363:2: (otherlv_0= 'FunctionCall' otherlv_1= '{' (otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) ) )? otherlv_4= 'function' ( ( ruleEString ) ) otherlv_6= '}' )
            // InternalMyDsl.g:1364:3: otherlv_0= 'FunctionCall' otherlv_1= '{' (otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) ) )? otherlv_4= 'function' ( ( ruleEString ) ) otherlv_6= '}'
            {
            otherlv_0=(Token)match(input,44,FOLLOW_3); 

            			newLeafNode(otherlv_0, grammarAccess.getFunctionCallAccess().getFunctionCallKeyword_0());
            		
            otherlv_1=(Token)match(input,12,FOLLOW_34); 

            			newLeafNode(otherlv_1, grammarAccess.getFunctionCallAccess().getLeftCurlyBracketKeyword_1());
            		
            // InternalMyDsl.g:1372:3: (otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) ) )?
            int alt30=2;
            int LA30_0 = input.LA(1);

            if ( (LA30_0==43) ) {
                alt30=1;
            }
            switch (alt30) {
                case 1 :
                    // InternalMyDsl.g:1373:4: otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) )
                    {
                    otherlv_2=(Token)match(input,43,FOLLOW_9); 

                    				newLeafNode(otherlv_2, grammarAccess.getFunctionCallAccess().getEntityTypeKeyword_2_0());
                    			
                    // InternalMyDsl.g:1377:4: ( (lv_entityType_3_0= ruleRMLObject ) )
                    // InternalMyDsl.g:1378:5: (lv_entityType_3_0= ruleRMLObject )
                    {
                    // InternalMyDsl.g:1378:5: (lv_entityType_3_0= ruleRMLObject )
                    // InternalMyDsl.g:1379:6: lv_entityType_3_0= ruleRMLObject
                    {

                    						newCompositeNode(grammarAccess.getFunctionCallAccess().getEntityTypeRMLObjectEnumRuleCall_2_1_0());
                    					
                    pushFollow(FOLLOW_35);
                    lv_entityType_3_0=ruleRMLObject();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getFunctionCallRule());
                    						}
                    						set(
                    							current,
                    							"entityType",
                    							lv_entityType_3_0,
                    							"org.xtext.example.mydsl.MyDsl.RMLObject");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            otherlv_4=(Token)match(input,13,FOLLOW_22); 

            			newLeafNode(otherlv_4, grammarAccess.getFunctionCallAccess().getFunctionKeyword_3());
            		
            // InternalMyDsl.g:1401:3: ( ( ruleEString ) )
            // InternalMyDsl.g:1402:4: ( ruleEString )
            {
            // InternalMyDsl.g:1402:4: ( ruleEString )
            // InternalMyDsl.g:1403:5: ruleEString
            {

            					if (current==null) {
            						current = createModelElement(grammarAccess.getFunctionCallRule());
            					}
            				

            					newCompositeNode(grammarAccess.getFunctionCallAccess().getFunctionFunctionCrossReference_4_0());
            				
            pushFollow(FOLLOW_7);
            ruleEString();

            state._fsp--;


            					afterParserOrEnumRuleCall();
            				

            }


            }

            otherlv_6=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_6, grammarAccess.getFunctionCallAccess().getRightCurlyBracketKeyword_5());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleFunctionCall"


    // $ANTLR start "entryRuleArithmeticExpression"
    // InternalMyDsl.g:1425:1: entryRuleArithmeticExpression returns [EObject current=null] : iv_ruleArithmeticExpression= ruleArithmeticExpression EOF ;
    public final EObject entryRuleArithmeticExpression() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleArithmeticExpression = null;


        try {
            // InternalMyDsl.g:1425:61: (iv_ruleArithmeticExpression= ruleArithmeticExpression EOF )
            // InternalMyDsl.g:1426:2: iv_ruleArithmeticExpression= ruleArithmeticExpression EOF
            {
             newCompositeNode(grammarAccess.getArithmeticExpressionRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleArithmeticExpression=ruleArithmeticExpression();

            state._fsp--;

             current =iv_ruleArithmeticExpression; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleArithmeticExpression"


    // $ANTLR start "ruleArithmeticExpression"
    // InternalMyDsl.g:1432:1: ruleArithmeticExpression returns [EObject current=null] : (otherlv_0= 'ArithmeticExpression' otherlv_1= '{' (otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) ) )? (otherlv_4= 'arithmeticOperator' ( (lv_arithmeticOperator_5_0= ruleArithmeticOperators ) ) )? otherlv_6= 'elementA' ( ( ruleEString ) ) (otherlv_8= 'elementB' ( ( ruleEString ) ) )? (otherlv_10= 'variable' otherlv_11= '{' ( (lv_variable_12_0= ruleVariable ) ) (otherlv_13= ',' ( (lv_variable_14_0= ruleVariable ) ) )* otherlv_15= '}' )? otherlv_16= '}' ) ;
    public final EObject ruleArithmeticExpression() throws RecognitionException {
        EObject current = null;

        Token otherlv_0=null;
        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_4=null;
        Token otherlv_6=null;
        Token otherlv_8=null;
        Token otherlv_10=null;
        Token otherlv_11=null;
        Token otherlv_13=null;
        Token otherlv_15=null;
        Token otherlv_16=null;
        Enumerator lv_entityType_3_0 = null;

        Enumerator lv_arithmeticOperator_5_0 = null;

        EObject lv_variable_12_0 = null;

        EObject lv_variable_14_0 = null;



        	enterRule();

        try {
            // InternalMyDsl.g:1438:2: ( (otherlv_0= 'ArithmeticExpression' otherlv_1= '{' (otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) ) )? (otherlv_4= 'arithmeticOperator' ( (lv_arithmeticOperator_5_0= ruleArithmeticOperators ) ) )? otherlv_6= 'elementA' ( ( ruleEString ) ) (otherlv_8= 'elementB' ( ( ruleEString ) ) )? (otherlv_10= 'variable' otherlv_11= '{' ( (lv_variable_12_0= ruleVariable ) ) (otherlv_13= ',' ( (lv_variable_14_0= ruleVariable ) ) )* otherlv_15= '}' )? otherlv_16= '}' ) )
            // InternalMyDsl.g:1439:2: (otherlv_0= 'ArithmeticExpression' otherlv_1= '{' (otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) ) )? (otherlv_4= 'arithmeticOperator' ( (lv_arithmeticOperator_5_0= ruleArithmeticOperators ) ) )? otherlv_6= 'elementA' ( ( ruleEString ) ) (otherlv_8= 'elementB' ( ( ruleEString ) ) )? (otherlv_10= 'variable' otherlv_11= '{' ( (lv_variable_12_0= ruleVariable ) ) (otherlv_13= ',' ( (lv_variable_14_0= ruleVariable ) ) )* otherlv_15= '}' )? otherlv_16= '}' )
            {
            // InternalMyDsl.g:1439:2: (otherlv_0= 'ArithmeticExpression' otherlv_1= '{' (otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) ) )? (otherlv_4= 'arithmeticOperator' ( (lv_arithmeticOperator_5_0= ruleArithmeticOperators ) ) )? otherlv_6= 'elementA' ( ( ruleEString ) ) (otherlv_8= 'elementB' ( ( ruleEString ) ) )? (otherlv_10= 'variable' otherlv_11= '{' ( (lv_variable_12_0= ruleVariable ) ) (otherlv_13= ',' ( (lv_variable_14_0= ruleVariable ) ) )* otherlv_15= '}' )? otherlv_16= '}' )
            // InternalMyDsl.g:1440:3: otherlv_0= 'ArithmeticExpression' otherlv_1= '{' (otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) ) )? (otherlv_4= 'arithmeticOperator' ( (lv_arithmeticOperator_5_0= ruleArithmeticOperators ) ) )? otherlv_6= 'elementA' ( ( ruleEString ) ) (otherlv_8= 'elementB' ( ( ruleEString ) ) )? (otherlv_10= 'variable' otherlv_11= '{' ( (lv_variable_12_0= ruleVariable ) ) (otherlv_13= ',' ( (lv_variable_14_0= ruleVariable ) ) )* otherlv_15= '}' )? otherlv_16= '}'
            {
            otherlv_0=(Token)match(input,45,FOLLOW_3); 

            			newLeafNode(otherlv_0, grammarAccess.getArithmeticExpressionAccess().getArithmeticExpressionKeyword_0());
            		
            otherlv_1=(Token)match(input,12,FOLLOW_36); 

            			newLeafNode(otherlv_1, grammarAccess.getArithmeticExpressionAccess().getLeftCurlyBracketKeyword_1());
            		
            // InternalMyDsl.g:1448:3: (otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) ) )?
            int alt31=2;
            int LA31_0 = input.LA(1);

            if ( (LA31_0==43) ) {
                alt31=1;
            }
            switch (alt31) {
                case 1 :
                    // InternalMyDsl.g:1449:4: otherlv_2= 'entityType' ( (lv_entityType_3_0= ruleRMLObject ) )
                    {
                    otherlv_2=(Token)match(input,43,FOLLOW_9); 

                    				newLeafNode(otherlv_2, grammarAccess.getArithmeticExpressionAccess().getEntityTypeKeyword_2_0());
                    			
                    // InternalMyDsl.g:1453:4: ( (lv_entityType_3_0= ruleRMLObject ) )
                    // InternalMyDsl.g:1454:5: (lv_entityType_3_0= ruleRMLObject )
                    {
                    // InternalMyDsl.g:1454:5: (lv_entityType_3_0= ruleRMLObject )
                    // InternalMyDsl.g:1455:6: lv_entityType_3_0= ruleRMLObject
                    {

                    						newCompositeNode(grammarAccess.getArithmeticExpressionAccess().getEntityTypeRMLObjectEnumRuleCall_2_1_0());
                    					
                    pushFollow(FOLLOW_37);
                    lv_entityType_3_0=ruleRMLObject();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getArithmeticExpressionRule());
                    						}
                    						set(
                    							current,
                    							"entityType",
                    							lv_entityType_3_0,
                    							"org.xtext.example.mydsl.MyDsl.RMLObject");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            // InternalMyDsl.g:1473:3: (otherlv_4= 'arithmeticOperator' ( (lv_arithmeticOperator_5_0= ruleArithmeticOperators ) ) )?
            int alt32=2;
            int LA32_0 = input.LA(1);

            if ( (LA32_0==46) ) {
                alt32=1;
            }
            switch (alt32) {
                case 1 :
                    // InternalMyDsl.g:1474:4: otherlv_4= 'arithmeticOperator' ( (lv_arithmeticOperator_5_0= ruleArithmeticOperators ) )
                    {
                    otherlv_4=(Token)match(input,46,FOLLOW_38); 

                    				newLeafNode(otherlv_4, grammarAccess.getArithmeticExpressionAccess().getArithmeticOperatorKeyword_3_0());
                    			
                    // InternalMyDsl.g:1478:4: ( (lv_arithmeticOperator_5_0= ruleArithmeticOperators ) )
                    // InternalMyDsl.g:1479:5: (lv_arithmeticOperator_5_0= ruleArithmeticOperators )
                    {
                    // InternalMyDsl.g:1479:5: (lv_arithmeticOperator_5_0= ruleArithmeticOperators )
                    // InternalMyDsl.g:1480:6: lv_arithmeticOperator_5_0= ruleArithmeticOperators
                    {

                    						newCompositeNode(grammarAccess.getArithmeticExpressionAccess().getArithmeticOperatorArithmeticOperatorsEnumRuleCall_3_1_0());
                    					
                    pushFollow(FOLLOW_39);
                    lv_arithmeticOperator_5_0=ruleArithmeticOperators();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getArithmeticExpressionRule());
                    						}
                    						set(
                    							current,
                    							"arithmeticOperator",
                    							lv_arithmeticOperator_5_0,
                    							"org.xtext.example.mydsl.MyDsl.ArithmeticOperators");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            otherlv_6=(Token)match(input,47,FOLLOW_22); 

            			newLeafNode(otherlv_6, grammarAccess.getArithmeticExpressionAccess().getElementAKeyword_4());
            		
            // InternalMyDsl.g:1502:3: ( ( ruleEString ) )
            // InternalMyDsl.g:1503:4: ( ruleEString )
            {
            // InternalMyDsl.g:1503:4: ( ruleEString )
            // InternalMyDsl.g:1504:5: ruleEString
            {

            					if (current==null) {
            						current = createModelElement(grammarAccess.getArithmeticExpressionRule());
            					}
            				

            					newCompositeNode(grammarAccess.getArithmeticExpressionAccess().getElementAEntityCrossReference_5_0());
            				
            pushFollow(FOLLOW_40);
            ruleEString();

            state._fsp--;


            					afterParserOrEnumRuleCall();
            				

            }


            }

            // InternalMyDsl.g:1518:3: (otherlv_8= 'elementB' ( ( ruleEString ) ) )?
            int alt33=2;
            int LA33_0 = input.LA(1);

            if ( (LA33_0==48) ) {
                alt33=1;
            }
            switch (alt33) {
                case 1 :
                    // InternalMyDsl.g:1519:4: otherlv_8= 'elementB' ( ( ruleEString ) )
                    {
                    otherlv_8=(Token)match(input,48,FOLLOW_22); 

                    				newLeafNode(otherlv_8, grammarAccess.getArithmeticExpressionAccess().getElementBKeyword_6_0());
                    			
                    // InternalMyDsl.g:1523:4: ( ( ruleEString ) )
                    // InternalMyDsl.g:1524:5: ( ruleEString )
                    {
                    // InternalMyDsl.g:1524:5: ( ruleEString )
                    // InternalMyDsl.g:1525:6: ruleEString
                    {

                    						if (current==null) {
                    							current = createModelElement(grammarAccess.getArithmeticExpressionRule());
                    						}
                    					

                    						newCompositeNode(grammarAccess.getArithmeticExpressionAccess().getElementBEntityCrossReference_6_1_0());
                    					
                    pushFollow(FOLLOW_13);
                    ruleEString();

                    state._fsp--;


                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            // InternalMyDsl.g:1540:3: (otherlv_10= 'variable' otherlv_11= '{' ( (lv_variable_12_0= ruleVariable ) ) (otherlv_13= ',' ( (lv_variable_14_0= ruleVariable ) ) )* otherlv_15= '}' )?
            int alt35=2;
            int LA35_0 = input.LA(1);

            if ( (LA35_0==20) ) {
                alt35=1;
            }
            switch (alt35) {
                case 1 :
                    // InternalMyDsl.g:1541:4: otherlv_10= 'variable' otherlv_11= '{' ( (lv_variable_12_0= ruleVariable ) ) (otherlv_13= ',' ( (lv_variable_14_0= ruleVariable ) ) )* otherlv_15= '}'
                    {
                    otherlv_10=(Token)match(input,20,FOLLOW_3); 

                    				newLeafNode(otherlv_10, grammarAccess.getArithmeticExpressionAccess().getVariableKeyword_7_0());
                    			
                    otherlv_11=(Token)match(input,12,FOLLOW_14); 

                    				newLeafNode(otherlv_11, grammarAccess.getArithmeticExpressionAccess().getLeftCurlyBracketKeyword_7_1());
                    			
                    // InternalMyDsl.g:1549:4: ( (lv_variable_12_0= ruleVariable ) )
                    // InternalMyDsl.g:1550:5: (lv_variable_12_0= ruleVariable )
                    {
                    // InternalMyDsl.g:1550:5: (lv_variable_12_0= ruleVariable )
                    // InternalMyDsl.g:1551:6: lv_variable_12_0= ruleVariable
                    {

                    						newCompositeNode(grammarAccess.getArithmeticExpressionAccess().getVariableVariableParserRuleCall_7_2_0());
                    					
                    pushFollow(FOLLOW_6);
                    lv_variable_12_0=ruleVariable();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getArithmeticExpressionRule());
                    						}
                    						add(
                    							current,
                    							"variable",
                    							lv_variable_12_0,
                    							"org.xtext.example.mydsl.MyDsl.Variable");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }

                    // InternalMyDsl.g:1568:4: (otherlv_13= ',' ( (lv_variable_14_0= ruleVariable ) ) )*
                    loop34:
                    do {
                        int alt34=2;
                        int LA34_0 = input.LA(1);

                        if ( (LA34_0==14) ) {
                            alt34=1;
                        }


                        switch (alt34) {
                    	case 1 :
                    	    // InternalMyDsl.g:1569:5: otherlv_13= ',' ( (lv_variable_14_0= ruleVariable ) )
                    	    {
                    	    otherlv_13=(Token)match(input,14,FOLLOW_14); 

                    	    					newLeafNode(otherlv_13, grammarAccess.getArithmeticExpressionAccess().getCommaKeyword_7_3_0());
                    	    				
                    	    // InternalMyDsl.g:1573:5: ( (lv_variable_14_0= ruleVariable ) )
                    	    // InternalMyDsl.g:1574:6: (lv_variable_14_0= ruleVariable )
                    	    {
                    	    // InternalMyDsl.g:1574:6: (lv_variable_14_0= ruleVariable )
                    	    // InternalMyDsl.g:1575:7: lv_variable_14_0= ruleVariable
                    	    {

                    	    							newCompositeNode(grammarAccess.getArithmeticExpressionAccess().getVariableVariableParserRuleCall_7_3_1_0());
                    	    						
                    	    pushFollow(FOLLOW_6);
                    	    lv_variable_14_0=ruleVariable();

                    	    state._fsp--;


                    	    							if (current==null) {
                    	    								current = createModelElementForParent(grammarAccess.getArithmeticExpressionRule());
                    	    							}
                    	    							add(
                    	    								current,
                    	    								"variable",
                    	    								lv_variable_14_0,
                    	    								"org.xtext.example.mydsl.MyDsl.Variable");
                    	    							afterParserOrEnumRuleCall();
                    	    						

                    	    }


                    	    }


                    	    }
                    	    break;

                    	default :
                    	    break loop34;
                        }
                    } while (true);

                    otherlv_15=(Token)match(input,15,FOLLOW_7); 

                    				newLeafNode(otherlv_15, grammarAccess.getArithmeticExpressionAccess().getRightCurlyBracketKeyword_7_4());
                    			

                    }
                    break;

            }

            otherlv_16=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_16, grammarAccess.getArithmeticExpressionAccess().getRightCurlyBracketKeyword_8());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleArithmeticExpression"


    // $ANTLR start "entryRuleGetValue"
    // InternalMyDsl.g:1606:1: entryRuleGetValue returns [EObject current=null] : iv_ruleGetValue= ruleGetValue EOF ;
    public final EObject entryRuleGetValue() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleGetValue = null;


        try {
            // InternalMyDsl.g:1606:49: (iv_ruleGetValue= ruleGetValue EOF )
            // InternalMyDsl.g:1607:2: iv_ruleGetValue= ruleGetValue EOF
            {
             newCompositeNode(grammarAccess.getGetValueRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleGetValue=ruleGetValue();

            state._fsp--;

             current =iv_ruleGetValue; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleGetValue"


    // $ANTLR start "ruleGetValue"
    // InternalMyDsl.g:1613:1: ruleGetValue returns [EObject current=null] : ( () otherlv_1= 'GetValue' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}' ) ;
    public final EObject ruleGetValue() throws RecognitionException {
        EObject current = null;

        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_3=null;
        Token otherlv_5=null;
        Enumerator lv_entityType_4_0 = null;



        	enterRule();

        try {
            // InternalMyDsl.g:1619:2: ( ( () otherlv_1= 'GetValue' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}' ) )
            // InternalMyDsl.g:1620:2: ( () otherlv_1= 'GetValue' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}' )
            {
            // InternalMyDsl.g:1620:2: ( () otherlv_1= 'GetValue' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}' )
            // InternalMyDsl.g:1621:3: () otherlv_1= 'GetValue' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}'
            {
            // InternalMyDsl.g:1621:3: ()
            // InternalMyDsl.g:1622:4: 
            {

            				current = forceCreateModelElement(
            					grammarAccess.getGetValueAccess().getGetValueAction_0(),
            					current);
            			

            }

            otherlv_1=(Token)match(input,49,FOLLOW_3); 

            			newLeafNode(otherlv_1, grammarAccess.getGetValueAccess().getGetValueKeyword_1());
            		
            otherlv_2=(Token)match(input,12,FOLLOW_33); 

            			newLeafNode(otherlv_2, grammarAccess.getGetValueAccess().getLeftCurlyBracketKeyword_2());
            		
            // InternalMyDsl.g:1636:3: (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )?
            int alt36=2;
            int LA36_0 = input.LA(1);

            if ( (LA36_0==43) ) {
                alt36=1;
            }
            switch (alt36) {
                case 1 :
                    // InternalMyDsl.g:1637:4: otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) )
                    {
                    otherlv_3=(Token)match(input,43,FOLLOW_9); 

                    				newLeafNode(otherlv_3, grammarAccess.getGetValueAccess().getEntityTypeKeyword_3_0());
                    			
                    // InternalMyDsl.g:1641:4: ( (lv_entityType_4_0= ruleRMLObject ) )
                    // InternalMyDsl.g:1642:5: (lv_entityType_4_0= ruleRMLObject )
                    {
                    // InternalMyDsl.g:1642:5: (lv_entityType_4_0= ruleRMLObject )
                    // InternalMyDsl.g:1643:6: lv_entityType_4_0= ruleRMLObject
                    {

                    						newCompositeNode(grammarAccess.getGetValueAccess().getEntityTypeRMLObjectEnumRuleCall_3_1_0());
                    					
                    pushFollow(FOLLOW_7);
                    lv_entityType_4_0=ruleRMLObject();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getGetValueRule());
                    						}
                    						set(
                    							current,
                    							"entityType",
                    							lv_entityType_4_0,
                    							"org.xtext.example.mydsl.MyDsl.RMLObject");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            otherlv_5=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_5, grammarAccess.getGetValueAccess().getRightCurlyBracketKeyword_4());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleGetValue"


    // $ANTLR start "entryRuleVariableRef"
    // InternalMyDsl.g:1669:1: entryRuleVariableRef returns [EObject current=null] : iv_ruleVariableRef= ruleVariableRef EOF ;
    public final EObject entryRuleVariableRef() throws RecognitionException {
        EObject current = null;

        EObject iv_ruleVariableRef = null;


        try {
            // InternalMyDsl.g:1669:52: (iv_ruleVariableRef= ruleVariableRef EOF )
            // InternalMyDsl.g:1670:2: iv_ruleVariableRef= ruleVariableRef EOF
            {
             newCompositeNode(grammarAccess.getVariableRefRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleVariableRef=ruleVariableRef();

            state._fsp--;

             current =iv_ruleVariableRef; 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleVariableRef"


    // $ANTLR start "ruleVariableRef"
    // InternalMyDsl.g:1676:1: ruleVariableRef returns [EObject current=null] : ( () otherlv_1= 'VariableRef' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}' ) ;
    public final EObject ruleVariableRef() throws RecognitionException {
        EObject current = null;

        Token otherlv_1=null;
        Token otherlv_2=null;
        Token otherlv_3=null;
        Token otherlv_5=null;
        Enumerator lv_entityType_4_0 = null;



        	enterRule();

        try {
            // InternalMyDsl.g:1682:2: ( ( () otherlv_1= 'VariableRef' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}' ) )
            // InternalMyDsl.g:1683:2: ( () otherlv_1= 'VariableRef' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}' )
            {
            // InternalMyDsl.g:1683:2: ( () otherlv_1= 'VariableRef' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}' )
            // InternalMyDsl.g:1684:3: () otherlv_1= 'VariableRef' otherlv_2= '{' (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )? otherlv_5= '}'
            {
            // InternalMyDsl.g:1684:3: ()
            // InternalMyDsl.g:1685:4: 
            {

            				current = forceCreateModelElement(
            					grammarAccess.getVariableRefAccess().getVariableRefAction_0(),
            					current);
            			

            }

            otherlv_1=(Token)match(input,50,FOLLOW_3); 

            			newLeafNode(otherlv_1, grammarAccess.getVariableRefAccess().getVariableRefKeyword_1());
            		
            otherlv_2=(Token)match(input,12,FOLLOW_33); 

            			newLeafNode(otherlv_2, grammarAccess.getVariableRefAccess().getLeftCurlyBracketKeyword_2());
            		
            // InternalMyDsl.g:1699:3: (otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) ) )?
            int alt37=2;
            int LA37_0 = input.LA(1);

            if ( (LA37_0==43) ) {
                alt37=1;
            }
            switch (alt37) {
                case 1 :
                    // InternalMyDsl.g:1700:4: otherlv_3= 'entityType' ( (lv_entityType_4_0= ruleRMLObject ) )
                    {
                    otherlv_3=(Token)match(input,43,FOLLOW_9); 

                    				newLeafNode(otherlv_3, grammarAccess.getVariableRefAccess().getEntityTypeKeyword_3_0());
                    			
                    // InternalMyDsl.g:1704:4: ( (lv_entityType_4_0= ruleRMLObject ) )
                    // InternalMyDsl.g:1705:5: (lv_entityType_4_0= ruleRMLObject )
                    {
                    // InternalMyDsl.g:1705:5: (lv_entityType_4_0= ruleRMLObject )
                    // InternalMyDsl.g:1706:6: lv_entityType_4_0= ruleRMLObject
                    {

                    						newCompositeNode(grammarAccess.getVariableRefAccess().getEntityTypeRMLObjectEnumRuleCall_3_1_0());
                    					
                    pushFollow(FOLLOW_7);
                    lv_entityType_4_0=ruleRMLObject();

                    state._fsp--;


                    						if (current==null) {
                    							current = createModelElementForParent(grammarAccess.getVariableRefRule());
                    						}
                    						set(
                    							current,
                    							"entityType",
                    							lv_entityType_4_0,
                    							"org.xtext.example.mydsl.MyDsl.RMLObject");
                    						afterParserOrEnumRuleCall();
                    					

                    }


                    }


                    }
                    break;

            }

            otherlv_5=(Token)match(input,15,FOLLOW_2); 

            			newLeafNode(otherlv_5, grammarAccess.getVariableRefAccess().getRightCurlyBracketKeyword_4());
            		

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleVariableRef"


    // $ANTLR start "entryRuleEString"
    // InternalMyDsl.g:1732:1: entryRuleEString returns [String current=null] : iv_ruleEString= ruleEString EOF ;
    public final String entryRuleEString() throws RecognitionException {
        String current = null;

        AntlrDatatypeRuleToken iv_ruleEString = null;


        try {
            // InternalMyDsl.g:1732:47: (iv_ruleEString= ruleEString EOF )
            // InternalMyDsl.g:1733:2: iv_ruleEString= ruleEString EOF
            {
             newCompositeNode(grammarAccess.getEStringRule()); 
            pushFollow(FOLLOW_1);
            iv_ruleEString=ruleEString();

            state._fsp--;

             current =iv_ruleEString.getText(); 
            match(input,EOF,FOLLOW_2); 

            }

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "entryRuleEString"


    // $ANTLR start "ruleEString"
    // InternalMyDsl.g:1739:1: ruleEString returns [AntlrDatatypeRuleToken current=new AntlrDatatypeRuleToken()] : (this_STRING_0= RULE_STRING | this_ID_1= RULE_ID ) ;
    public final AntlrDatatypeRuleToken ruleEString() throws RecognitionException {
        AntlrDatatypeRuleToken current = new AntlrDatatypeRuleToken();

        Token this_STRING_0=null;
        Token this_ID_1=null;


        	enterRule();

        try {
            // InternalMyDsl.g:1745:2: ( (this_STRING_0= RULE_STRING | this_ID_1= RULE_ID ) )
            // InternalMyDsl.g:1746:2: (this_STRING_0= RULE_STRING | this_ID_1= RULE_ID )
            {
            // InternalMyDsl.g:1746:2: (this_STRING_0= RULE_STRING | this_ID_1= RULE_ID )
            int alt38=2;
            int LA38_0 = input.LA(1);

            if ( (LA38_0==RULE_STRING) ) {
                alt38=1;
            }
            else if ( (LA38_0==RULE_ID) ) {
                alt38=2;
            }
            else {
                NoViableAltException nvae =
                    new NoViableAltException("", 38, 0, input);

                throw nvae;
            }
            switch (alt38) {
                case 1 :
                    // InternalMyDsl.g:1747:3: this_STRING_0= RULE_STRING
                    {
                    this_STRING_0=(Token)match(input,RULE_STRING,FOLLOW_2); 

                    			current.merge(this_STRING_0);
                    		

                    			newLeafNode(this_STRING_0, grammarAccess.getEStringAccess().getSTRINGTerminalRuleCall_0());
                    		

                    }
                    break;
                case 2 :
                    // InternalMyDsl.g:1755:3: this_ID_1= RULE_ID
                    {
                    this_ID_1=(Token)match(input,RULE_ID,FOLLOW_2); 

                    			current.merge(this_ID_1);
                    		

                    			newLeafNode(this_ID_1, grammarAccess.getEStringAccess().getIDTerminalRuleCall_1());
                    		

                    }
                    break;

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleEString"


    // $ANTLR start "ruleRMLObject"
    // InternalMyDsl.g:1766:1: ruleRMLObject returns [Enumerator current=null] : ( (enumLiteral_0= 'RMLInt' ) | (enumLiteral_1= 'RMLString' ) | (enumLiteral_2= 'RMLFloat' ) | (enumLiteral_3= 'RMLDouble' ) | (enumLiteral_4= 'RMLBoolean' ) ) ;
    public final Enumerator ruleRMLObject() throws RecognitionException {
        Enumerator current = null;

        Token enumLiteral_0=null;
        Token enumLiteral_1=null;
        Token enumLiteral_2=null;
        Token enumLiteral_3=null;
        Token enumLiteral_4=null;


        	enterRule();

        try {
            // InternalMyDsl.g:1772:2: ( ( (enumLiteral_0= 'RMLInt' ) | (enumLiteral_1= 'RMLString' ) | (enumLiteral_2= 'RMLFloat' ) | (enumLiteral_3= 'RMLDouble' ) | (enumLiteral_4= 'RMLBoolean' ) ) )
            // InternalMyDsl.g:1773:2: ( (enumLiteral_0= 'RMLInt' ) | (enumLiteral_1= 'RMLString' ) | (enumLiteral_2= 'RMLFloat' ) | (enumLiteral_3= 'RMLDouble' ) | (enumLiteral_4= 'RMLBoolean' ) )
            {
            // InternalMyDsl.g:1773:2: ( (enumLiteral_0= 'RMLInt' ) | (enumLiteral_1= 'RMLString' ) | (enumLiteral_2= 'RMLFloat' ) | (enumLiteral_3= 'RMLDouble' ) | (enumLiteral_4= 'RMLBoolean' ) )
            int alt39=5;
            switch ( input.LA(1) ) {
            case 51:
                {
                alt39=1;
                }
                break;
            case 52:
                {
                alt39=2;
                }
                break;
            case 53:
                {
                alt39=3;
                }
                break;
            case 54:
                {
                alt39=4;
                }
                break;
            case 55:
                {
                alt39=5;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 39, 0, input);

                throw nvae;
            }

            switch (alt39) {
                case 1 :
                    // InternalMyDsl.g:1774:3: (enumLiteral_0= 'RMLInt' )
                    {
                    // InternalMyDsl.g:1774:3: (enumLiteral_0= 'RMLInt' )
                    // InternalMyDsl.g:1775:4: enumLiteral_0= 'RMLInt'
                    {
                    enumLiteral_0=(Token)match(input,51,FOLLOW_2); 

                    				current = grammarAccess.getRMLObjectAccess().getRMLIntEnumLiteralDeclaration_0().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_0, grammarAccess.getRMLObjectAccess().getRMLIntEnumLiteralDeclaration_0());
                    			

                    }


                    }
                    break;
                case 2 :
                    // InternalMyDsl.g:1782:3: (enumLiteral_1= 'RMLString' )
                    {
                    // InternalMyDsl.g:1782:3: (enumLiteral_1= 'RMLString' )
                    // InternalMyDsl.g:1783:4: enumLiteral_1= 'RMLString'
                    {
                    enumLiteral_1=(Token)match(input,52,FOLLOW_2); 

                    				current = grammarAccess.getRMLObjectAccess().getRMLStringEnumLiteralDeclaration_1().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_1, grammarAccess.getRMLObjectAccess().getRMLStringEnumLiteralDeclaration_1());
                    			

                    }


                    }
                    break;
                case 3 :
                    // InternalMyDsl.g:1790:3: (enumLiteral_2= 'RMLFloat' )
                    {
                    // InternalMyDsl.g:1790:3: (enumLiteral_2= 'RMLFloat' )
                    // InternalMyDsl.g:1791:4: enumLiteral_2= 'RMLFloat'
                    {
                    enumLiteral_2=(Token)match(input,53,FOLLOW_2); 

                    				current = grammarAccess.getRMLObjectAccess().getRMLFloatEnumLiteralDeclaration_2().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_2, grammarAccess.getRMLObjectAccess().getRMLFloatEnumLiteralDeclaration_2());
                    			

                    }


                    }
                    break;
                case 4 :
                    // InternalMyDsl.g:1798:3: (enumLiteral_3= 'RMLDouble' )
                    {
                    // InternalMyDsl.g:1798:3: (enumLiteral_3= 'RMLDouble' )
                    // InternalMyDsl.g:1799:4: enumLiteral_3= 'RMLDouble'
                    {
                    enumLiteral_3=(Token)match(input,54,FOLLOW_2); 

                    				current = grammarAccess.getRMLObjectAccess().getRMLDoubleEnumLiteralDeclaration_3().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_3, grammarAccess.getRMLObjectAccess().getRMLDoubleEnumLiteralDeclaration_3());
                    			

                    }


                    }
                    break;
                case 5 :
                    // InternalMyDsl.g:1806:3: (enumLiteral_4= 'RMLBoolean' )
                    {
                    // InternalMyDsl.g:1806:3: (enumLiteral_4= 'RMLBoolean' )
                    // InternalMyDsl.g:1807:4: enumLiteral_4= 'RMLBoolean'
                    {
                    enumLiteral_4=(Token)match(input,55,FOLLOW_2); 

                    				current = grammarAccess.getRMLObjectAccess().getRMLBooleanEnumLiteralDeclaration_4().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_4, grammarAccess.getRMLObjectAccess().getRMLBooleanEnumLiteralDeclaration_4());
                    			

                    }


                    }
                    break;

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleRMLObject"


    // $ANTLR start "ruleDirection"
    // InternalMyDsl.g:1817:1: ruleDirection returns [Enumerator current=null] : ( (enumLiteral_0= 'forward' ) | (enumLiteral_1= 'backward' ) | (enumLiteral_2= 'sideLeft' ) | (enumLiteral_3= 'sideRight' ) ) ;
    public final Enumerator ruleDirection() throws RecognitionException {
        Enumerator current = null;

        Token enumLiteral_0=null;
        Token enumLiteral_1=null;
        Token enumLiteral_2=null;
        Token enumLiteral_3=null;


        	enterRule();

        try {
            // InternalMyDsl.g:1823:2: ( ( (enumLiteral_0= 'forward' ) | (enumLiteral_1= 'backward' ) | (enumLiteral_2= 'sideLeft' ) | (enumLiteral_3= 'sideRight' ) ) )
            // InternalMyDsl.g:1824:2: ( (enumLiteral_0= 'forward' ) | (enumLiteral_1= 'backward' ) | (enumLiteral_2= 'sideLeft' ) | (enumLiteral_3= 'sideRight' ) )
            {
            // InternalMyDsl.g:1824:2: ( (enumLiteral_0= 'forward' ) | (enumLiteral_1= 'backward' ) | (enumLiteral_2= 'sideLeft' ) | (enumLiteral_3= 'sideRight' ) )
            int alt40=4;
            switch ( input.LA(1) ) {
            case 56:
                {
                alt40=1;
                }
                break;
            case 57:
                {
                alt40=2;
                }
                break;
            case 58:
                {
                alt40=3;
                }
                break;
            case 59:
                {
                alt40=4;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 40, 0, input);

                throw nvae;
            }

            switch (alt40) {
                case 1 :
                    // InternalMyDsl.g:1825:3: (enumLiteral_0= 'forward' )
                    {
                    // InternalMyDsl.g:1825:3: (enumLiteral_0= 'forward' )
                    // InternalMyDsl.g:1826:4: enumLiteral_0= 'forward'
                    {
                    enumLiteral_0=(Token)match(input,56,FOLLOW_2); 

                    				current = grammarAccess.getDirectionAccess().getForwardEnumLiteralDeclaration_0().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_0, grammarAccess.getDirectionAccess().getForwardEnumLiteralDeclaration_0());
                    			

                    }


                    }
                    break;
                case 2 :
                    // InternalMyDsl.g:1833:3: (enumLiteral_1= 'backward' )
                    {
                    // InternalMyDsl.g:1833:3: (enumLiteral_1= 'backward' )
                    // InternalMyDsl.g:1834:4: enumLiteral_1= 'backward'
                    {
                    enumLiteral_1=(Token)match(input,57,FOLLOW_2); 

                    				current = grammarAccess.getDirectionAccess().getBackwardEnumLiteralDeclaration_1().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_1, grammarAccess.getDirectionAccess().getBackwardEnumLiteralDeclaration_1());
                    			

                    }


                    }
                    break;
                case 3 :
                    // InternalMyDsl.g:1841:3: (enumLiteral_2= 'sideLeft' )
                    {
                    // InternalMyDsl.g:1841:3: (enumLiteral_2= 'sideLeft' )
                    // InternalMyDsl.g:1842:4: enumLiteral_2= 'sideLeft'
                    {
                    enumLiteral_2=(Token)match(input,58,FOLLOW_2); 

                    				current = grammarAccess.getDirectionAccess().getSideLeftEnumLiteralDeclaration_2().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_2, grammarAccess.getDirectionAccess().getSideLeftEnumLiteralDeclaration_2());
                    			

                    }


                    }
                    break;
                case 4 :
                    // InternalMyDsl.g:1849:3: (enumLiteral_3= 'sideRight' )
                    {
                    // InternalMyDsl.g:1849:3: (enumLiteral_3= 'sideRight' )
                    // InternalMyDsl.g:1850:4: enumLiteral_3= 'sideRight'
                    {
                    enumLiteral_3=(Token)match(input,59,FOLLOW_2); 

                    				current = grammarAccess.getDirectionAccess().getSideRightEnumLiteralDeclaration_3().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_3, grammarAccess.getDirectionAccess().getSideRightEnumLiteralDeclaration_3());
                    			

                    }


                    }
                    break;

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleDirection"


    // $ANTLR start "ruleUnitMeasure"
    // InternalMyDsl.g:1860:1: ruleUnitMeasure returns [Enumerator current=null] : ( (enumLiteral_0= 'm' ) | (enumLiteral_1= 'dm' ) | (enumLiteral_2= 'cm' ) | (enumLiteral_3= 'mm' ) ) ;
    public final Enumerator ruleUnitMeasure() throws RecognitionException {
        Enumerator current = null;

        Token enumLiteral_0=null;
        Token enumLiteral_1=null;
        Token enumLiteral_2=null;
        Token enumLiteral_3=null;


        	enterRule();

        try {
            // InternalMyDsl.g:1866:2: ( ( (enumLiteral_0= 'm' ) | (enumLiteral_1= 'dm' ) | (enumLiteral_2= 'cm' ) | (enumLiteral_3= 'mm' ) ) )
            // InternalMyDsl.g:1867:2: ( (enumLiteral_0= 'm' ) | (enumLiteral_1= 'dm' ) | (enumLiteral_2= 'cm' ) | (enumLiteral_3= 'mm' ) )
            {
            // InternalMyDsl.g:1867:2: ( (enumLiteral_0= 'm' ) | (enumLiteral_1= 'dm' ) | (enumLiteral_2= 'cm' ) | (enumLiteral_3= 'mm' ) )
            int alt41=4;
            switch ( input.LA(1) ) {
            case 60:
                {
                alt41=1;
                }
                break;
            case 61:
                {
                alt41=2;
                }
                break;
            case 62:
                {
                alt41=3;
                }
                break;
            case 63:
                {
                alt41=4;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 41, 0, input);

                throw nvae;
            }

            switch (alt41) {
                case 1 :
                    // InternalMyDsl.g:1868:3: (enumLiteral_0= 'm' )
                    {
                    // InternalMyDsl.g:1868:3: (enumLiteral_0= 'm' )
                    // InternalMyDsl.g:1869:4: enumLiteral_0= 'm'
                    {
                    enumLiteral_0=(Token)match(input,60,FOLLOW_2); 

                    				current = grammarAccess.getUnitMeasureAccess().getMEnumLiteralDeclaration_0().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_0, grammarAccess.getUnitMeasureAccess().getMEnumLiteralDeclaration_0());
                    			

                    }


                    }
                    break;
                case 2 :
                    // InternalMyDsl.g:1876:3: (enumLiteral_1= 'dm' )
                    {
                    // InternalMyDsl.g:1876:3: (enumLiteral_1= 'dm' )
                    // InternalMyDsl.g:1877:4: enumLiteral_1= 'dm'
                    {
                    enumLiteral_1=(Token)match(input,61,FOLLOW_2); 

                    				current = grammarAccess.getUnitMeasureAccess().getDmEnumLiteralDeclaration_1().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_1, grammarAccess.getUnitMeasureAccess().getDmEnumLiteralDeclaration_1());
                    			

                    }


                    }
                    break;
                case 3 :
                    // InternalMyDsl.g:1884:3: (enumLiteral_2= 'cm' )
                    {
                    // InternalMyDsl.g:1884:3: (enumLiteral_2= 'cm' )
                    // InternalMyDsl.g:1885:4: enumLiteral_2= 'cm'
                    {
                    enumLiteral_2=(Token)match(input,62,FOLLOW_2); 

                    				current = grammarAccess.getUnitMeasureAccess().getCmEnumLiteralDeclaration_2().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_2, grammarAccess.getUnitMeasureAccess().getCmEnumLiteralDeclaration_2());
                    			

                    }


                    }
                    break;
                case 4 :
                    // InternalMyDsl.g:1892:3: (enumLiteral_3= 'mm' )
                    {
                    // InternalMyDsl.g:1892:3: (enumLiteral_3= 'mm' )
                    // InternalMyDsl.g:1893:4: enumLiteral_3= 'mm'
                    {
                    enumLiteral_3=(Token)match(input,63,FOLLOW_2); 

                    				current = grammarAccess.getUnitMeasureAccess().getMmEnumLiteralDeclaration_3().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_3, grammarAccess.getUnitMeasureAccess().getMmEnumLiteralDeclaration_3());
                    			

                    }


                    }
                    break;

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleUnitMeasure"


    // $ANTLR start "ruleArithmeticOperators"
    // InternalMyDsl.g:1903:1: ruleArithmeticOperators returns [Enumerator current=null] : ( (enumLiteral_0= 'Plus' ) | (enumLiteral_1= 'Minus' ) | (enumLiteral_2= 'Multiplie' ) | (enumLiteral_3= 'Divide' ) | (enumLiteral_4= 'Modulo' ) | (enumLiteral_5= 'Power' ) ) ;
    public final Enumerator ruleArithmeticOperators() throws RecognitionException {
        Enumerator current = null;

        Token enumLiteral_0=null;
        Token enumLiteral_1=null;
        Token enumLiteral_2=null;
        Token enumLiteral_3=null;
        Token enumLiteral_4=null;
        Token enumLiteral_5=null;


        	enterRule();

        try {
            // InternalMyDsl.g:1909:2: ( ( (enumLiteral_0= 'Plus' ) | (enumLiteral_1= 'Minus' ) | (enumLiteral_2= 'Multiplie' ) | (enumLiteral_3= 'Divide' ) | (enumLiteral_4= 'Modulo' ) | (enumLiteral_5= 'Power' ) ) )
            // InternalMyDsl.g:1910:2: ( (enumLiteral_0= 'Plus' ) | (enumLiteral_1= 'Minus' ) | (enumLiteral_2= 'Multiplie' ) | (enumLiteral_3= 'Divide' ) | (enumLiteral_4= 'Modulo' ) | (enumLiteral_5= 'Power' ) )
            {
            // InternalMyDsl.g:1910:2: ( (enumLiteral_0= 'Plus' ) | (enumLiteral_1= 'Minus' ) | (enumLiteral_2= 'Multiplie' ) | (enumLiteral_3= 'Divide' ) | (enumLiteral_4= 'Modulo' ) | (enumLiteral_5= 'Power' ) )
            int alt42=6;
            switch ( input.LA(1) ) {
            case 64:
                {
                alt42=1;
                }
                break;
            case 65:
                {
                alt42=2;
                }
                break;
            case 66:
                {
                alt42=3;
                }
                break;
            case 67:
                {
                alt42=4;
                }
                break;
            case 68:
                {
                alt42=5;
                }
                break;
            case 69:
                {
                alt42=6;
                }
                break;
            default:
                NoViableAltException nvae =
                    new NoViableAltException("", 42, 0, input);

                throw nvae;
            }

            switch (alt42) {
                case 1 :
                    // InternalMyDsl.g:1911:3: (enumLiteral_0= 'Plus' )
                    {
                    // InternalMyDsl.g:1911:3: (enumLiteral_0= 'Plus' )
                    // InternalMyDsl.g:1912:4: enumLiteral_0= 'Plus'
                    {
                    enumLiteral_0=(Token)match(input,64,FOLLOW_2); 

                    				current = grammarAccess.getArithmeticOperatorsAccess().getPlusEnumLiteralDeclaration_0().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_0, grammarAccess.getArithmeticOperatorsAccess().getPlusEnumLiteralDeclaration_0());
                    			

                    }


                    }
                    break;
                case 2 :
                    // InternalMyDsl.g:1919:3: (enumLiteral_1= 'Minus' )
                    {
                    // InternalMyDsl.g:1919:3: (enumLiteral_1= 'Minus' )
                    // InternalMyDsl.g:1920:4: enumLiteral_1= 'Minus'
                    {
                    enumLiteral_1=(Token)match(input,65,FOLLOW_2); 

                    				current = grammarAccess.getArithmeticOperatorsAccess().getMinusEnumLiteralDeclaration_1().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_1, grammarAccess.getArithmeticOperatorsAccess().getMinusEnumLiteralDeclaration_1());
                    			

                    }


                    }
                    break;
                case 3 :
                    // InternalMyDsl.g:1927:3: (enumLiteral_2= 'Multiplie' )
                    {
                    // InternalMyDsl.g:1927:3: (enumLiteral_2= 'Multiplie' )
                    // InternalMyDsl.g:1928:4: enumLiteral_2= 'Multiplie'
                    {
                    enumLiteral_2=(Token)match(input,66,FOLLOW_2); 

                    				current = grammarAccess.getArithmeticOperatorsAccess().getMultiplieEnumLiteralDeclaration_2().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_2, grammarAccess.getArithmeticOperatorsAccess().getMultiplieEnumLiteralDeclaration_2());
                    			

                    }


                    }
                    break;
                case 4 :
                    // InternalMyDsl.g:1935:3: (enumLiteral_3= 'Divide' )
                    {
                    // InternalMyDsl.g:1935:3: (enumLiteral_3= 'Divide' )
                    // InternalMyDsl.g:1936:4: enumLiteral_3= 'Divide'
                    {
                    enumLiteral_3=(Token)match(input,67,FOLLOW_2); 

                    				current = grammarAccess.getArithmeticOperatorsAccess().getDivideEnumLiteralDeclaration_3().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_3, grammarAccess.getArithmeticOperatorsAccess().getDivideEnumLiteralDeclaration_3());
                    			

                    }


                    }
                    break;
                case 5 :
                    // InternalMyDsl.g:1943:3: (enumLiteral_4= 'Modulo' )
                    {
                    // InternalMyDsl.g:1943:3: (enumLiteral_4= 'Modulo' )
                    // InternalMyDsl.g:1944:4: enumLiteral_4= 'Modulo'
                    {
                    enumLiteral_4=(Token)match(input,68,FOLLOW_2); 

                    				current = grammarAccess.getArithmeticOperatorsAccess().getModuloEnumLiteralDeclaration_4().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_4, grammarAccess.getArithmeticOperatorsAccess().getModuloEnumLiteralDeclaration_4());
                    			

                    }


                    }
                    break;
                case 6 :
                    // InternalMyDsl.g:1951:3: (enumLiteral_5= 'Power' )
                    {
                    // InternalMyDsl.g:1951:3: (enumLiteral_5= 'Power' )
                    // InternalMyDsl.g:1952:4: enumLiteral_5= 'Power'
                    {
                    enumLiteral_5=(Token)match(input,69,FOLLOW_2); 

                    				current = grammarAccess.getArithmeticOperatorsAccess().getPowerEnumLiteralDeclaration_5().getEnumLiteral().getInstance();
                    				newLeafNode(enumLiteral_5, grammarAccess.getArithmeticOperatorsAccess().getPowerEnumLiteralDeclaration_5());
                    			

                    }


                    }
                    break;

            }


            }


            	leaveRule();

        }

            catch (RecognitionException re) {
                recover(input,re);
                appendSkippedTokens();
            }
        finally {
        }
        return current;
    }
    // $ANTLR end "ruleArithmeticOperators"

    // Delegated rules


 

    public static final BitSet FOLLOW_1 = new BitSet(new long[]{0x0000000000000000L});
    public static final BitSet FOLLOW_2 = new BitSet(new long[]{0x0000000000000002L});
    public static final BitSet FOLLOW_3 = new BitSet(new long[]{0x0000000000001000L});
    public static final BitSet FOLLOW_4 = new BitSet(new long[]{0x000000000000A000L});
    public static final BitSet FOLLOW_5 = new BitSet(new long[]{0x0000000000010000L});
    public static final BitSet FOLLOW_6 = new BitSet(new long[]{0x000000000000C000L});
    public static final BitSet FOLLOW_7 = new BitSet(new long[]{0x0000000000008000L});
    public static final BitSet FOLLOW_8 = new BitSet(new long[]{0x00000000001E8000L});
    public static final BitSet FOLLOW_9 = new BitSet(new long[]{0x00F8000000000000L});
    public static final BitSet FOLLOW_10 = new BitSet(new long[]{0x00000000001C8000L});
    public static final BitSet FOLLOW_11 = new BitSet(new long[]{0x0000000000188000L});
    public static final BitSet FOLLOW_12 = new BitSet(new long[]{0x000000A522000000L});
    public static final BitSet FOLLOW_13 = new BitSet(new long[]{0x0000000000108000L});
    public static final BitSet FOLLOW_14 = new BitSet(new long[]{0x0000000000200000L});
    public static final BitSet FOLLOW_15 = new BitSet(new long[]{0x0000000001C08000L});
    public static final BitSet FOLLOW_16 = new BitSet(new long[]{0x0000000001808000L});
    public static final BitSet FOLLOW_17 = new BitSet(new long[]{0x0000000001008000L});
    public static final BitSet FOLLOW_18 = new BitSet(new long[]{0x0004000000000000L});
    public static final BitSet FOLLOW_19 = new BitSet(new long[]{0x000000000C000000L});
    public static final BitSet FOLLOW_20 = new BitSet(new long[]{0x0F00000000000000L});
    public static final BitSet FOLLOW_21 = new BitSet(new long[]{0x0000000008000000L});
    public static final BitSet FOLLOW_22 = new BitSet(new long[]{0x0000000000000030L});
    public static final BitSet FOLLOW_23 = new BitSet(new long[]{0x0000000010008000L});
    public static final BitSet FOLLOW_24 = new BitSet(new long[]{0x0000000040000000L});
    public static final BitSet FOLLOW_25 = new BitSet(new long[]{0x0000000080000000L});
    public static final BitSet FOLLOW_26 = new BitSet(new long[]{0x0000000200188000L});
    public static final BitSet FOLLOW_27 = new BitSet(new long[]{0x0000001800000000L});
    public static final BitSet FOLLOW_28 = new BitSet(new long[]{0x0000001000000000L});
    public static final BitSet FOLLOW_29 = new BitSet(new long[]{0x0000004000000000L});
    public static final BitSet FOLLOW_30 = new BitSet(new long[]{0x0000030200108000L});
    public static final BitSet FOLLOW_31 = new BitSet(new long[]{0x0000030000108000L});
    public static final BitSet FOLLOW_32 = new BitSet(new long[]{0x0000020000108000L});
    public static final BitSet FOLLOW_33 = new BitSet(new long[]{0x0000080000008000L});
    public static final BitSet FOLLOW_34 = new BitSet(new long[]{0x0000080000002000L});
    public static final BitSet FOLLOW_35 = new BitSet(new long[]{0x0000000000002000L});
    public static final BitSet FOLLOW_36 = new BitSet(new long[]{0x0000C80000000000L});
    public static final BitSet FOLLOW_37 = new BitSet(new long[]{0x0000C00000000000L});
    public static final BitSet FOLLOW_38 = new BitSet(new long[]{0x0000000000000000L,0x000000000000003FL});
    public static final BitSet FOLLOW_39 = new BitSet(new long[]{0x0000800000000000L});
    public static final BitSet FOLLOW_40 = new BitSet(new long[]{0x0001000000108000L});

}